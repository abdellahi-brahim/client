import React, { useEffect } from 'react';
import styled from 'styled-components';
import { IMessage } from '../types/chat';
import Message from './Message';

const ListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: ${({ theme }) => theme.spacing.medium};

  @media (max-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }
`;

const DateHeader = styled.div`
  text-align: center;
  margin: 10px 0;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondaryText};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 5px;
`;

interface Props {
  messages: Record<string, IMessage[]>;
  messageEndRef: React.RefObject<HTMLDivElement>;
  onScroll: (event: React.UIEvent<HTMLDivElement>) => void;
}

const MessageList: React.FC<Props> = ({ messages, messageEndRef, onScroll }) => {
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, messageEndRef]);

  return (
    <ListContainer onScroll={onScroll}>
      {Object.entries(messages).map(([date, messagesForDate]) => (
        <div key={date}>
          <DateHeader>{date}</DateHeader>
          {messagesForDate.map((message, index) => (
            <Message key={index} type={message.type} content={message.content} date={message.timestamp} />
          ))}
        </div>
      ))}
      <div ref={messageEndRef} />
    </ListContainer>
  );
};

export default MessageList;
