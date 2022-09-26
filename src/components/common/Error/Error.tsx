import { theme } from 'src/assets/theme/theme';
import styled from 'styled-components';

export enum ERROR_TYPES {
  warning = 'Warning',
  error = 'Error',
}

interface ErrorProps {
  errorType: ERROR_TYPES;
  error: string;
}

const Error = styled.p`
  text-transform: capitalize;
  padding: 12px;
  width: 80%;

  span {
    text-transform: uppercase;
    color: ${theme.colors.warning};
  }
`;

const ErrorComponent = ({ errorType, error }: ErrorProps) => {
  return (
    <Error>
      <span>{errorType}: </span>
      {error}
    </Error>
  );
};

export default ErrorComponent;
