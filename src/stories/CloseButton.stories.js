import React from 'react';

import CloseButton from '../primitives/CloseButton';

export default {
  title: 'Buttons/CloseButton',
  component: CloseButton,
  argTypes: {
    onClick: { action: 'button clicked!' }
  },
};

const Template = (args) => (
    <div style={{ width: '100px', height: '100px', border: '1px solid blue'}}>
        <CloseButton {...args} />
    </div>
);

export const Default = Template.bind({});
