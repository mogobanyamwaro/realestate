import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  background: #333;
  white-space: no-wrap;
  outline: none;
  border: none;
  min-width: 100px;
  text-decoration: none;
  max-width: 200px;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
  color: #ffffff;
  font-size: ${({ big }) => (big ? '20px' : '14px')};

  &:hover {
    transform: translateY(-2px);
  }
`;

export default Button;
