import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    className: { control: '' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Hello world</Button>;

export const Default = Template.bind({});

Default.args = {
  className: '',
  style: {},
};
