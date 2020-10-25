import React from 'react';
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom';

import TabList from '../primitives/TabList';

export default {
    title: 'General/TabList',
    component: TabList,
    argTypes: {
        tabList: { table: { disable: true } }
    }
};

const BrowseMovies = () => {
    let { genre } = useParams();

    return (
        <>
            <h2>Browse Movies</h2>
            <p>Selected Genre = {genre}</p>
        </>
    );
};

const MovieWishlist = () => {
    let { watchedStatus } = useParams();

    return (
        <>
            <h2>Movie Wishlist</h2>
            <p>Watched Status = {watchedStatus}</p>
        </>
    );
};

const Template = (args) => (
    <BrowserRouter>
        <TabList {...args} />
        <Switch>
            <Route path="browse/:genre">
                <BrowseMovies />
            </Route>
            <Route path="wishlist/:watchedStatus">
                <MovieWishlist />
            </Route>
        </Switch>
    </BrowserRouter>
);

export const BrowseMoviesTabList = Template.bind({});
BrowseMoviesTabList.args = {
    tabList: [
        { linkTo: "/browse/action", title: "Action" },
        { linkTo: "/browse/drama", title: "Drama" },
        { linkTo: "/browse/comedy", title: "Comedy" },
        { linkTo: "/browse/scifi", title: "Sci Fi" },
        { linkTo: "/browse/fantasy", title: "Fantasy" }
    ]
};

export const WishlistTabList = Template.bind({});
WishlistTabList.args = {
    tabList: [
        { linkTo: "/wishlist/unwatched", title: "Unwatched" },
        { linkTo: "/wishlist/watched", title: "Watched" }
    ]
};
