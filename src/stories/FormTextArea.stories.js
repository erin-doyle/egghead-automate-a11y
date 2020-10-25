import React from 'react';

import FormTextArea from '../primitives/FormTextArea';

export default {
  title: 'Inputs/FormTextArea',
  component: FormTextArea,
  args: {
    name: 'testTextArea',
    label: 'TextArea Label'
  },
  argTypes: {
    onChange: { action: 'TextArea changed!' }
  },
};

const Template = (args) => <FormTextArea {...args} />;

export const Default = Template.bind({});

export const HelperText = Template.bind({});
HelperText.args = {
    helperText: 'This is a textarea field'
};

export const ErrorText = Template.bind({});
ErrorText.args = {
    errorText: 'There is something wrong with the value!',
    isValid: false
};

export const ErrorWithHelperText = Template.bind({});
ErrorWithHelperText.args = {
    helperText: 'This is a textarea field',
    errorText: 'There is something wrong with the value!',
    isValid: false
};
