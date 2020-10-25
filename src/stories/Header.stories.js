import React from 'react';

import Header from '../primitives/Header';

export default {
  title: 'General/Header',
  component: Header,
  argTypes: {
    handleButtonClick: { action: 'button clicked!' }
  },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'App Header Title',
    buttonText: 'button text'
};
