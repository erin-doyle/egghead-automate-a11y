import React from 'react';
import PropTypes from 'prop-types';

const PrimaryButton = ({ type, onClick, children }) => (
    <button
        type={type}
        className="btn btn-primary"
        onClick={onClick}
    >
        {children}
    </button>
);

PrimaryButton.defaultProps = {
    type: 'button',
    onClick: null
};

PrimaryButton.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired
};


export default PrimaryButton;
