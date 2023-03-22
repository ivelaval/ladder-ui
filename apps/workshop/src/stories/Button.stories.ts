import type { Meta, StoryObj } from '@storybook/react';
import '@mindful/button.react/lib/Button.variables.css';
import '@mindful/button.react/lib/Button.css';
import Button, { IButton } from '@mindful/button.react';

const meta = {
  title: '@mindful/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activateLibraryClasses: true,
    children: 'Hello world',
    className: '',
    style: {},
  } as IButton,
};
