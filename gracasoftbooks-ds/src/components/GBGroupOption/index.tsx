
import React, { useState } from 'react';
import styled, { css } from 'styled-components';


// import { Container } from './styles';
export  interface OptionProps{
    id: number;
    title:string;
    content:string;
    footer:string;
    selected: boolean;
}

export  interface GbGroupOptionProps{
   options: OptionProps[];
   defaultValue?: OptionProps;
   onChange?: (opcao: OptionProps) => void;
}

const SectionEstyle = styled.section<{select: boolean}>`
    width: 194px;
    height: 40px;
    background: #fff;
    border: 1px solid;
    border-color: ${props => props.select ? "blue": 'orange'};;
    border-radius: 8px;
    padding: 1rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin: 10px;
    background-color: ${props => props.select ? "blue": '#fff'};

    header{
        color: yellowgreen;
        font-weight: bold;
        font-size: 14px;
    }

    strong{
        color: black;
        font-weight: 700;
        font-size: 16px;
    }
    footer{
        color:rgba(0,0,0,0.54);
        font-weight: 400;
        font-size: 16px;
    }
`;


export const GBGroupOption = ({options, onChange, defaultValue}:GbGroupOptionProps) => {

   const [select, setSelect] =  useState<OptionProps | null>(defaultValue ?? null); 
   const onSelected = (option: OptionProps) : void => {
            setSelect(option);
            if(onChange){
                onChange(option);
            }
   }

  return (<div style={{display:'flex'}}>
  {options.map((option)=>
    <SectionEstyle key={option.id} select={select?.id === option.id} onClick={()=>onSelected(option)}>
        <header>{option.title}</header>
        <div><strong>{option.content}</strong></div>
        <footer>{option.footer}</footer>
    </SectionEstyle>
  )}
  </div>

  )
}
