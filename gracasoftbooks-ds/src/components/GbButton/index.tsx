import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

// import { Container } from './styles';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    //adicionar os props
    children: React.ReactNode
}

const ButtonStyle = styled.button`
    background:#7502b3;
    padding:12px 20px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    border: 1px solid #7502b3;
    cursor: pointer;
    &:hover{
      background:#560386;
      border: 1px solid #7502b3;
    }
    &:focus{
      border: 2px solid #7502b3;
    }




`;



export const GbButton: React.FC<ButtonProps> = (props) => {
  return (<ButtonStyle>
    {props.children}
  </ButtonStyle>);
}
