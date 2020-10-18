import React from 'react';
import PropTypes from 'prop-types';

import SecondaryButton from '../primitives/SecondaryButton';


const Header = ({ title, buttonText, handleButtonClick }) => (
    <>
        <div className="navbar navbar-dark bg-primary">
            <span className="navbar-text">
                {title}
            </span>
            <SecondaryButton variant="outline" onClick={handleButtonClick}>{buttonText}</SecondaryButton>
        </div>
    </>
);

Header.defaultProps = {
    buttonText: ''
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    handleButtonClick: PropTypes.func.isRequired
};


export default Header;
