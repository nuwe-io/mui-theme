import React from 'react'

import SwitchTheme from './SwitchTheme.js'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'SwitchButton',
  component: SwitchTheme,
  argTypes: {
    color: { control: { type: 'select', options: ['default', 'inherit', 'primary', 'secondary'] } },
    variant: { control: { type: 'select', options: ['contained', 'secondary', 'outlined'] } },
    iconColor: { control: 'color' }
  }
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SwitchTheme {...args} />

export const WithProps = Template.bind({})
