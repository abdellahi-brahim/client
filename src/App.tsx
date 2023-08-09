import React, { useState, useRef, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

import ChatContainer from './components/ChatContainer';
import Header from './components/Header';
import MessageList from './components/MessageList';
import { UserMessage, BotMessage } from './components/Message';
import InputArea from './components/InputArea';
import TextInput from './components/TextInput';
import SendButton from './components/SendButton';

import { IMessage } from './types/chat';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const socket = io(BACKEND_URL as string);

const App: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [input, setInput] = useState<string>('');

  const messageEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/chat`).then(response => {
      setMessages(response.data);
    });

    socket.on('message', (message: IMessage) => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      axios.post(`${BACKEND_URL}/api/message`, { content: input });
      setInput('');
    }
  };

  return (
    <ChatContainer>
      <Header>Chat with Bot</Header>
      <MessageList>
        {messages.map((message, index) => {
          if (message.type === 'user') {
            return <UserMessage key={index}>{message.content}</UserMessage>;
          } else {
            return <BotMessage key={index}>{message.content}</BotMessage>;
          }
        })}
        <div ref={messageEndRef} />
      </MessageList>
      <InputArea>
        <TextInput
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <SendButton onClick={handleSend}>Send</SendButton>
      </InputArea>
    </ChatContainer>
  );
}

export default App;
