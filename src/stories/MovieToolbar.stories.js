import React from 'react';

import MovieToolbar from '../primitives/MovieToolbar';

export default {
    title: 'General/MovieToolbar',
    component: MovieToolbar,
    argTypes: {

    }
};

const Template = (args) => (<MovieToolbar {...args} />);

export const WithWishlistActions = Template.bind({});
WithWishlistActions.args = {
    buttonList: [
        { title: 'Watch', action: () => alert('Watch button clicked!') },
        { title: 'Edit', action: () => alert('Edit button clicked!') },
        { title: 'Remove', action: () => alert('Remove button clicked!') }
    ]
};

export const WithBrowseActions = Template.bind({});
WithBrowseActions.args = {
    buttonList: [(
        { title: 'Remove', action: () => alert('Remove button clicked!') }
    )]
};
