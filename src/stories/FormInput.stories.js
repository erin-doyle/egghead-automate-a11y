import React from 'react';

import FormInput from '../primitives/FormInput';

export default {
  title: 'Inputs/FormInput',
  component: FormInput,
  args: {
    name: 'testInput',
    label: 'Input Label'
  },
  argTypes: {
    onChange: { action: 'input changed!' }
  },
};

const Template = (args) => <FormInput {...args} />;

export const Default = Template.bind({});

export const PasswordField = Template.bind({});
PasswordField.args = {
    type: 'password'
};

export const HelperText = Template.bind({});
HelperText.args = {
    helperText: 'This is a text input field'
};

export const ErrorText = Template.bind({});
ErrorText.args = {
    errorText: 'There is something wrong with the value!',
    isValid: false
};

export const ErrorWithHelperText = Template.bind({});
ErrorWithHelperText.args = {
    helperText: 'This is a text input field',
    errorText: 'There is something wrong with the value!',
    isValid: false
};
