import React from 'react';
import PropTypes from 'prop-types';

const SecondaryButton = ({ type, variant, onClick, children }) => (
    <button
        type={type}
        className={`btn ${variant === 'outline' ? 'btn-outline-secondary' : 'btn-secondary'}`}
        onClick={onClick}
    >
        {children}
    </button>
);

SecondaryButton.defaultProps = {
    type: 'button',
    variant: null,
    onClick: null
};

SecondaryButton.propTypes = {
    type: PropTypes.string,
    variant: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired
};


export default SecondaryButton;
