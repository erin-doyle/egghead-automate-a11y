import React from 'react';
import PropTypes from 'prop-types';

const CloseButton = ({ onClick }) => (
    <button type="button" className="close" onClick={onClick}>
        <span>&times;</span>
    </button>
);

CloseButton.defaultProps = {
    onClick: null
};

CloseButton.propTypes = {
    onClick: PropTypes.func
};


export default CloseButton;
