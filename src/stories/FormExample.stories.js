import React, { useState } from 'react';

import FormInput from '../primitives/FormInput';
import FormTextArea from '../primitives/FormTextArea';
import PrimaryButton from '../primitives/PrimaryButton';
import SecondaryButton from '../primitives/SecondaryButton';

export default {
    title: 'Form/Examples'
};

export const ExampleForm = () => {
    const [fieldValues, setFieldValues] = useState({
        name: '',
        description: ''
    });
    const [isValid, setIsValid] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`form submitted with values: Name: ${fieldValues.name}, Description: ${fieldValues.description}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormInput
                id="field-name"
                type="text"
                name="name"
                label="Name"
                isValid={isValid}
                onChange={(event) => setFieldValues({ ...fieldValues, name: event.target.value })}
                helperText="Enter your full name"
                errorText="Please provide a Name."
            />

            <FormTextArea
                id="field-description"
                type="description"
                name="description"
                label="Description"
                isValid={isValid}
                value={fieldValues.description}
                onChange={(event) => setFieldValues({ ...fieldValues, description: event.target.value })}
                errorText="Please provide a Description."
                helperText="Limit 500 chars"
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', width: '250px' }}>
                <SecondaryButton
                    onClick={() => setIsValid(!isValid)}
                >
                    Toggle form errors
                </SecondaryButton>

                <PrimaryButton type="submit">
                    Submit
                </PrimaryButton>
            </div>
        </form>
    );
};
