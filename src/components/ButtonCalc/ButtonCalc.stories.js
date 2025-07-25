
import { fn } from '@storybook/test'
import { ButtonCalc } from "./ButtonCalc"


export default {
    title: 'Button styles',
    component: ButtonCalc,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
   
   
    args: { onClick: fn() },
}

export const SimplePink = {
    args: {
        size: 'simple',
        background: 'pink',
        text: '1'
    },
}

export const LongWhite= {
    args: {
        size: 'long',
        background: 'white',
        text: '1'
    },
}