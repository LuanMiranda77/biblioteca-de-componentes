import React, { Component } from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {GBGroupOption, GbGroupOptionProps, OptionProps} from '../src/components/GBGroupOption';

export default{
    title:'Componentes/GBGroupOption',
    component: GBGroupOption

} as ComponentMeta<typeof GBGroupOption>;

const Template: ComponentStory<typeof GBGroupOption> = (args) => <GBGroupOption {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
   options: [
    {
        id:1,title:'nome',content:'tervia',footer:'.pdf'
    },
    {
        id:2,title:'nome',content:'tervia',footer:'.pdf'
    },
    {
        id:3,title:'nome',content:'tervia',footer:'.pdf'
    },
    {
        id:4,title:'nome',content:'tervia',footer:'.pdf'
    },
]
} as GbGroupOptionProps

// export const Secondary = Template.bind({});

// Secondary.args = {
//     label:'teste',
//     cssClass:'secondary',
// } as ButtonProps


