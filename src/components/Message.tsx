import styled, { css } from 'styled-components';
import { FaUserAlt, FaTree  } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

const baseMessageStyle = css`
  margin: ${({ theme }) => theme.spacing.small} 0;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledUserMessage = styled.div`
  ${baseMessageStyle};
  align-self: flex-end;
  background-color: ${({ theme }) => theme.colors.userMessageBg};
`;

const StyledBotMessage = styled.div`
  ${baseMessageStyle};
  align-self: flex-start;
  background-color: ${({ theme }) => theme.colors.botMessageBg};
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
  color: ${({ theme }) => theme.colors.textSecondary};
  width: 100px;
  text-align: right;
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

interface MessageProps {
  type: 'user' | 'bot';
  content: string;
  date: string;
}

const Message: React.FC<MessageProps> = ({ type, content, date }) => {
  
  const MessageComponent = type === 'user' ? StyledUserMessage : StyledBotMessage;
  const IconComponent = type === 'user' ? FaUserAlt : FaTree ;

  return (
    <MessageComponent>
      <IconContainer>
        <IconComponent />
      </IconContainer>
      <TextContent>
        <ReactMarkdown>{content}</ReactMarkdown>
      </TextContent>
      <DateText>{new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</DateText>
    </MessageComponent>
  );
};

export default Message;