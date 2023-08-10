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
  display: flex;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing.small};
`;

const Circle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing.small};
`;

const Icon = styled.div`
  font-size: 16px;
  padding: 2px;
`;

const MessageContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const DateText = styled.span`
  font-size: 0.8em;
  color: #888;
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
      <MessageContent>
        <IconContainer>
          <Circle>
            <Icon as={IconComponent} />
          </Circle>
          {content}
        </IconContainer>
      </MessageContent>
      <DateText>{new Date(date).toLocaleString()}</DateText>
    </MessageComponent>
  );
};

export default Message;
