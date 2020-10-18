import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Header from '../primitives/Header';
import TabList from '../primitives/TabList';

import WishList from './WishList';
import getWishlistActions from './getWishlistActions';
import MovieEditor from './MovieEditor';


class MovieWishlist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showEditor: false,
            movieIdInEdit: null
        };

        this.handleShowEditor = this.handleShowEditor.bind(this);
        this.handleHideEditor = this.handleHideEditor.bind(this);
        this.handleUpdateMovie = this.handleUpdateMovie.bind(this);
    }

    handleShowEditor(movieId) {
        this.setState({
            showEditor: true,
            movieIdInEdit: movieId
        });
    }

    handleHideEditor() {
        this.setState({
            showEditor: false,
            movieIdInEdit: null
        });
    }

    handleUpdateMovie(updatedDetails) {
        const { updateMovie } = this.props;
        const { movieIdInEdit } = this.state;

        updateMovie(movieIdInEdit, updatedDetails);
        this.handleHideEditor();
    }

    render() {
        const {
            history,
            match,
            wishlist,
            setAsWatched,
            setAsUnwatched,
            removeMovie
        } = this.props;
        const { showEditor, movieIdInEdit } = this.state;

        const goToBrowse = () => history.push('/browse');
        const tabList = [
            { linkTo: "/wishlist/unwatched", title: "Unwatched" },
            { linkTo: "/wishlist/watched", title: "Watched" }
        ];
        const movieActions = getWishlistActions(this.handleShowEditor, setAsWatched, setAsUnwatched, removeMovie);
        const movieInEditing = movieIdInEdit ? wishlist[movieIdInEdit] : {};

        return (
            <div>
                <Header title="Movie Wishlist" buttonText="+" buttonLabel="Add a Movie" handleButtonClick={goToBrowse} />

                <TabList tabList={tabList} />

                {Object.keys(wishlist).length
                    // Show WishList
                    ? <Fragment>
                        <div>
                            <WishList
                                movieList={wishlist}
                                watched={match.params.status === 'watched'}
                                movieActions={movieActions}
                            />
                        </div>

                        <MovieEditor
                            key={movieInEditing.name}
                            movie={movieInEditing}
                            updateMovie={this.handleUpdateMovie}
                            isOpen={showEditor}
                        />
                    </Fragment>

                    // No movies yet in the WishList
                    : <p>No Movies in your Wish List! <Link to="/browse">Add some</Link>!</p>
                }
            </div>
        );
    }
}

MovieWishlist.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    wishlist: PropTypes.object.isRequired,
    updateMovie: PropTypes.func.isRequired,
    setAsWatched: PropTypes.func.isRequired,
    setAsUnwatched: PropTypes.func.isRequired,
    removeMovie: PropTypes.func.isRequired
};


export default MovieWishlist;
