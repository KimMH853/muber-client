import React from 'react';
import { styled } from 'styled-components';


const Container = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  text-transform: uppercase;
  padding: 15px 0;
  font-size: 16px;
  border: 0;
  cursor: pointer;
  font-weight: 500;
  text-align: center;
  &:active,
  &:focus {
    outline: none;
  }
  &:disabled {
    opacity: 0.8;
  }
`;

interface IProps {
  buttonValue:string
  handleClick: any;
  disabled?: boolean;
}
const Button: React.FC<IProps> = ({ buttonValue, handleClick, disabled = false }) => {
    return (
        <Container type='button' value={buttonValue}  onClick={handleClick} />
    );
};

export default Button;