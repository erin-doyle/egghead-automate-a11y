import React from 'react';

import SecondaryButton from '../primitives/SecondaryButton';

export default {
  title: 'Buttons/SecondaryButton',
  component: SecondaryButton,
  argTypes: {
    onClick: { action: 'button clicked!' },
    children: { table: { disable: true } }
  },
};

const Template = (args) => (
    <SecondaryButton
        {...args}
    >
        Button Text
    </SecondaryButton>
);

export const Default = Template.bind({});
Default.args = {
    type: 'button'
};

export const Outlined = Template.bind({});
Outlined.args = {
    type: 'button',
    variant: 'outline'
};

export const Submit = (args) => (
    <form onSubmit={(event) => { event.preventDefault(); alert('Form Submitted!'); }}>
        <Template {...args} />
    </form>
);
Submit.args = {
    type: 'submit'
};
