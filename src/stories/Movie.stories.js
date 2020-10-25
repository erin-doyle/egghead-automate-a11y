import React from 'react';

import Movie from '../primitives/Movie';
import movies from '../movies';
import getWishlistActions from '../wishlist/getWishlistActions';
import getBrowseActions from '../browse/getBrowseActions';

const MOVIES_LIST = [];
Object.values(movies).forEach(movieGenre =>
    Object.entries(movieGenre).forEach(([movieId, movieDetail]) => {
        MOVIES_LIST.push({ id: movieId, ...movieDetail });
    })
);

const getMovieByTitle = (title) => MOVIES_LIST.find(movieDetails => movieDetails.name === title);

export default {
    title: 'General/Movie',
    component: Movie,
    argTypes: {
        movie: {
            defaultValue: 'Inception',
            control: {
                type: 'select',
                options: MOVIES_LIST.map(movieDetail => movieDetail.name)
            }
        },
        movieId: { table: { disable: true } },
        movieActions: { table: { disable: true } }
    }
};

const Template = (args) => {
    const { movie: movieTitle, getMovieActions, ...props } = args;
    const movie = getMovieByTitle(movieTitle);

    return (
        <Movie
            key={movie.id}
            movieId={movie.id}
            movie={movie}
            movieActions={getMovieActions ? getMovieActions(movie.id, movie.name, movie.watched) : null}
            {...props}
        />
    )
};

export const Default = Template.bind({});

export const WithWishlistActions = Template.bind({});
WithWishlistActions.args = {
    getMovieActions: getWishlistActions(
        (movieId) => alert(`Open Editor for movieId ${movieId}`),
        (movieId) => alert(`Setting movieId ${movieId} as watched`),
        (movieId) => alert(`Setting movieId ${movieId} as unwatched`),
        (movieId) => alert(`Removing movieId ${movieId} from Wishlist`)
    )
};

export const WithBrowseActions = Template.bind({});
WithBrowseActions.args = {
    getMovieActions: getBrowseActions(
        (movieId) => alert(`Adding movieId ${movieId} to Wishlist`),
        (movieId) => alert(`Removing movieId ${movieId} from Wishlist`)
    )
};
