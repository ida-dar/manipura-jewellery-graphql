import { theme } from 'src/assets/theme/theme';
import styled from 'styled-components';

export enum TYPES {
  warning = 'Warning',
  error = 'Error',
  success = 'Success',
}

interface Props {
  messageType: TYPES;
  message: string;
}

interface MessageProps {
  messageColor: boolean;
}

const Message = styled.p`
  text-transform: capitalize;
  padding: 12px;
  width: 80%;
  text-align: center;

  span {
    text-transform: uppercase;
    color: ${(props: MessageProps) => (props.messageColor ? theme.colors.success : theme.colors.warning)};
  }
`;

const MessageComponent = ({ messageType, message }: Props) => {
  return (
    <Message messageColor={messageType === TYPES.success}>
      <span>{messageType}: </span>
      {message}
    </Message>
  );
};

export default MessageComponent;
