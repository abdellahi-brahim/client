import React from 'react';
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
  color: #555;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
`;

interface Props {
  messages: Record<string, IMessage[]>;
}

const MessageList: React.FC<Props> = ({ messages }) => {
  return (
    <ListContainer>
      {Object.entries(messages).map(([date, messagesForDate]) => (
        <div key={date}>
          <DateHeader>{date}</DateHeader>
          {messagesForDate.map((message, index) => (
            <Message key={index} type={message.type} content={message.content} date={message.timestamp} />
          ))}
        </div>
      ))}
    </ListContainer>
  );
};

export default MessageList;
