import styled, { css } from 'styled-components';
import { FaUserAlt, FaRobot } from 'react-icons/fa';

const baseMessageStyle = css`
  margin: ${({ theme }) => theme.spacing.small} 0;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContent = styled.div`
  flex: 1;
  word-wrap: break-word;
  overflow-wrap: break-word;
  min-width: 0;
  padding: 0 10px;
`;

const DateText = styled.span`
  font-size: 0.8em;
  color: #888;
  width: 100px;
  text-align: right;
`;

const StyledUserMessage = styled.div`
  ${baseMessageStyle};
  align-self: flex-end;
  background-color: ${({ theme }) => theme.colors.userMessage};
`;

const StyledBotMessage = styled.div`
  ${baseMessageStyle};
  align-self: flex-start;
  background-color: ${({ theme }) => theme.colors.botMessage};
`;

interface MessageProps {
  type: 'user' | 'bot';
  content: string;
  date: string;
}

const Message: React.FC<MessageProps> = ({ type, content, date }) => {
  
  const MessageComponent = type === 'user' ? StyledUserMessage : StyledBotMessage;
  const IconComponent = type === 'user' ? FaUserAlt : FaRobot;

  return (
    <MessageComponent>
      <IconContainer>
        <IconComponent />
      </IconContainer>
      <TextContent>{content}</TextContent>
      <DateText>{new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</DateText>
    </MessageComponent>
  );
};

export default Message;
