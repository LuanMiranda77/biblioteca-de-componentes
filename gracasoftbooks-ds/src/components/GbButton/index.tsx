import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

// import { Container } from './styles';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    //adicionar os props
    // children: React.ReactNode
    label?:string;
    cssClass?: "primary" | 'secondary'
    onClick?: () => void;

}

const ButtonStyle = styled.button<ButtonProps>`
    background:${props => props.cssClass === 'primary'?'#0b5aec' : '#ecb00b'};
    padding:12px 20px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    border: 1px solid ${props => props.cssClass === 'primary'?'#0b5aec' : '#ecb00b'};
    cursor: pointer;

    ${props => props.cssClass === 'primary' 
        ? css`
            &:hover{
              background:#0040b8;
              border: 1px solid #0b5aec
            }
        
        ` 
        :
        css`
          &:hover{
            background:#c48f00;
            border: 1px solid #ecb00b
          }
        `
    };
    
    &:focus{
      border: 2px solid ${props => props.cssClass === 'primary'?'#0b5aec' : '#ecb00b'};
    }
`;

export const GbButton: React.FC<ButtonProps> = (props) => {
  return (<ButtonStyle onClick={props.onClick} cssClass={props.cssClass ? props.cssClass : 'primary'}>
    {props.label}
  </ButtonStyle>);
}
