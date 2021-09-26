import React from 'react';
import PropTypes from 'prop-types';

const PrimaryButton = ({ id, type, onClick, children }) => (
    <button
        id={id}
        type={type}
        className="btn btn-primary"
        onClick={onClick}
    >
        {children}
    </button>
);

PrimaryButton.defaultProps = {
    id: null,
    type: 'button',
    onClick: null
};

PrimaryButton.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired
};


export default PrimaryButton;
