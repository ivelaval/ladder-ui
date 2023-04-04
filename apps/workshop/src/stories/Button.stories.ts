import type { Meta, StoryObj } from '@storybook/react';
import '@ladder-ui/button.react/lib/Button.variables.css';
import './styles/overwrite.css';
import '@ladder-ui/button.react/lib/Button.css';
import Button, { IButton } from '@ladder-ui/button.react';

const meta = {
  title: '@ladder-ui/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    look: {
      options: ['natural', 'no-border', 'as-link', 'outline'],
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activateLibraryClasses: true,
    label: 'label',
    children: 'Hello world',
    className: '',
    look: 'as-link',
    style: {},
  } as IButton,
};
