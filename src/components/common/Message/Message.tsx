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

const Message = styled.p`
  text-transform: capitalize;
  padding: 12px;
  width: 80%;

  span {
    text-transform: uppercase;
    color: ${TYPES.success ? theme.colors.success : theme.colors.warning};
  }
`;

const MessageComponent = ({ messageType, message }: Props) => {
  return (
    <Message>
      <span>{messageType}: </span>
      {message}
    </Message>
  );
};

export default MessageComponent;
