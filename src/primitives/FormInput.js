import React from 'react';
import PropTypes from 'prop-types';


const FormInput = ({
    type,
    name,
    label,
    errorText,
    helperText,
    onChange,
    isValid
}) => {
    const inputClasses = `form-control ${!isValid ? 'is-invalid' : ''}`;

    return (
        <div className="form-group">
            <label>{label}</label>
            <input
                type={type}
                name={name}
                className={inputClasses}
                onChange={onChange}
            />
            { helperText &&
                <small className="form-text text-muted helper-text">
                    {helperText}
                </small>
            }
            { errorText &&
                <div className="invalid-feedback">
                    {errorText}
                </div>
            }
        </div>
    );
};

FormInput.defaultProps = {
    type: 'text',
    errorText: null,
    helperText: null,
    onChange: null,
    isValid: true
};

FormInput.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    errorText: PropTypes.string,
    helperText: PropTypes.string,
    onChange: PropTypes.func,
    isValid: PropTypes.bool
};


export default FormInput;
