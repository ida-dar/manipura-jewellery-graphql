import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Link = styled(NavLink)`
  display: block;
  text-align: left;
  margin: 6px;
  width: fit-content;

  :visited {
    color: inherit;
  }
`;
