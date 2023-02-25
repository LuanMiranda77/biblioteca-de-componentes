import React, { Component } from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {GbButton, ButtonProps} from '../src/components/GbButton';

export default{
    title:'Componentes/GbButton',
    component: GbButton

} as ComponentMeta<typeof GbButton>;

const Template: ComponentStory<typeof GbButton> = (args) => <GbButton {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
    label:'teste',
    cssClass:'primary',
} as ButtonProps

export const Secondary = Template.bind({});

Secondary.args = {
    label:'teste',
    cssClass:'secondary',
} as ButtonProps


