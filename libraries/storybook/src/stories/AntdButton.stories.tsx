import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AntdButton } from './AntdButton'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Clone/AntdButton',
  component: AntdButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AntdButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AntdButton> = args => <AntdButton {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'primary',
  label: 'Primary Button',
}

export const Default = Template.bind({})
Default.args = {
  type: 'default',
  label: 'Default Button',
}

export const Dashed = Template.bind({})
Dashed.args = {
  type: 'dashed',
  label: 'Dashed Button',
}

export const Text = Template.bind({})
Text.args = {
  type: 'text',
  label: 'Text Button',
}

export const Link = Template.bind({})
Link.args = {
  type: 'link',
  label: 'Link Button',
}
