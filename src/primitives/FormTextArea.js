import React from 'react';
import PropTypes from 'prop-types';


const FormTextArea = ({
    name,
    label,
    value,
    errorText,
    helperText,
    onChange,
    isValid
}) => {
    const inputClasses = `form-control ${!isValid ? 'is-invalid' : ''}`;

    return (
        <div className="form-group">
            <label>{label}</label>
            <textarea
                name={name}
                value={value}
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

FormTextArea.defaultProps = {
    value: '',
    errorText: null,
    helperText: null,
    onChange: null,
    isValid: true
};

FormTextArea.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    errorText: PropTypes.string,
    helperText: PropTypes.string,
    onChange: PropTypes.func,
    isValid: PropTypes.bool
};


export default FormTextArea;
