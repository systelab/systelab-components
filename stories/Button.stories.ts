
import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from './button.component';
import ButtonDocumentation from './docs/button.mdx';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: ButtonDocumentation,
    }
  },
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  variant: 'secondary'
};

export const Ghost = Template.bind({});
Ghost.args = {
  label: 'Button',
  variant: 'ghost'
};

export const Link = Template.bind({});
Link.args = {
  label: 'Button',
  variant: 'link'
};
