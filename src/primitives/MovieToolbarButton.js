import React from 'react';
import PropTypes from 'prop-types';

import SecondaryButton from '../primitives/SecondaryButton';


const MovieToolbarButton = ({ movieTitle, buttonText, buttonLabel, clickHandler }) => {
    return (
        <SecondaryButton onClick={clickHandler}>{buttonText}</SecondaryButton>
    );
};

MovieToolbarButton.defaultProps = {
    buttonText: '',
    buttonLabel: null
};

MovieToolbarButton.propTypes = {
    movieTitle: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    buttonLabel: PropTypes.string,
    clickHandler: PropTypes.func.isRequired
};


export default MovieToolbarButton;
