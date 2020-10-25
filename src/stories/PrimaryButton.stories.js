import React from 'react';

import PrimaryButton from '../primitives/PrimaryButton';

export default {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
  argTypes: {
    onClick: { action: 'button clicked!' },
    children: { table: { disable: true } }
  },
};

const Template = (args) => (
    <PrimaryButton
        {...args}
    >
        Button Text
    </PrimaryButton>
);

export const Default = Template.bind({});
Default.args = {
    type: 'button'
};

export const Submit = (args) => (
    <form onSubmit={(event) => { event.preventDefault(); alert('Form Submitted!'); }}>
        <Template {...args} />
    </form>
);
Submit.args = {
    type: 'submit'
};
