import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {GbButton} from '../src/components';

export default{
    title:'Componentes/GbButton'

} as ComponentMeta<typeof GbButton>;

const Template: ComponentStory<typeof GbButton> = () => <GbButton children='Clique Aqui'/>;

export const Primario = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});

