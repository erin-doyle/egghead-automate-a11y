import React from 'react';

import MovieToolbarButton from '../primitives/MovieToolbarButton';

export default {
    title: 'General/MovieToolbarButton',
    component: MovieToolbarButton,
    argTypes: {
        clickHandler: { action: 'button clicked!' }
    }
};

const Template = (args) => (<MovieToolbarButton {...args} />);

export const Default = Template.bind({});
Default.args = {
    movieTitle: 'Inception',
    buttonText: 'Movie Button'
};
