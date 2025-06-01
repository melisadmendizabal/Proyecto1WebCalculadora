import { ScreenCalc } from "./ScreenCalc"

export default {
  title: 'Screen',
  component: ScreenCalc,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
 
}

export const View = {
    args: {
        value: 'guyewg'
    },
}