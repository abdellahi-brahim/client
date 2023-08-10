import React, { useState, useRef, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

import GlobalStyles from './styles/GlobalStyles';
import ChatContainer from './components/ChatContainer';
import Header from './components/Header';
import MessageList from './components/MessageList';
import InputArea from './components/InputArea';
import TextInput from './components/TextInput';
import SendButton from './components/SendButton';
import ScrollToBottomButton from './components/ScrollToBottomButton';
import TypingAnimation from './components/TypingAnimation';
import { IMessage } from './types/chat';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const socket = io(BACKEND_URL as string);

function groupByDate(messages: IMessage[]) {
  return messages.reduce((acc, message) => {
    const date = new Date(message.timestamp).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(message);
    return acc;
  }, {} as Record<string, IMessage[]>);
}

const App: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [input, setInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const isScrolledUpRef = useRef(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/chat`).then(response => {
      setMessages(response.data);
    });

    socket.on('message', (message: IMessage) => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    socket.on('typing', () => {
      setIsTyping(true);
    });

    socket.on('stop_typing', () => {
      setIsTyping(false);
    });

    return () => {
      socket.off('message');
      socket.off('typing');
      socket.off('stop_typing');
    };
  }, []);

  const handleSend = () => {
    if (input.trim()) {
      axios.post(`${BACKEND_URL}/api/message`, { content: input });
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    const apearHeightPx = 4000;

    if (scrollTop < scrollHeight - clientHeight - apearHeightPx && !isScrolledUpRef.current) {
      isScrolledUpRef.current = true;
      setShowScrollButton(true);
    } else if (scrollTop >= scrollHeight - clientHeight - apearHeightPx && isScrolledUpRef.current) {
      isScrolledUpRef.current = false;
      setShowScrollButton(false);
    }
  };

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const groupedMessages = groupByDate(messages);

  return (
    <>
      <GlobalStyles />
      <ChatContainer>
        <Header>Chat with Groot</Header>
        <MessageList messages={groupedMessages} messageEndRef={messageEndRef} onScroll={handleScroll} />
        <ScrollToBottomButton onClick={scrollToBottom} isVisible={showScrollButton} />
        {isTyping && <TypingAnimation />}
        <InputArea>
          <TextInput
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            disabled={isTyping}
          />
          <SendButton onClick={handleSend} disabled={isTyping}>Send</SendButton>
        </InputArea>
      </ChatContainer>
    </>
  );
}

export default App;
