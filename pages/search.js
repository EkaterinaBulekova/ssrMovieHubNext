// @flow
import React from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-unfetch';
import dynamic from 'next/dynamic';
import Header from '../components/header/header';
import AppFooter from '../components/footer/footer';
import Search from '../components/search/search';
import ErrorBoundary from '../components/error-boundary/error-boundary';
import FilmsResults from '../components/films-results/films-results';
import Message from '../components/message/message';
import * as actions from '../redux/action';
import sortMovies from '../selector/sortSelector';

const DynamicMovieList = dynamic({
  loader: () => import('../components/movie-list/movie-list'),
  // eslint-disable-next-line react/display-name
  loading: () => <p>Loading ...</p>,
  ssr: false,
});

type MovieType = {
  id: string,
  title: string,
  genres: Array<string>,
  poster_path: String,
  vote_average: String,
  release_date: String,
  runtime: String,
  overview: String,
};

type Props = {
  startSearch: any,
  searchBy: string,
  sortBy: string,
  search: string,
  movies: Array<MovieType>
}

export class SearchPage extends React.Component<Props> {
  componentDidUpdate(prevProps) {
    const {
      startSearch, searchBy, sortBy, search,
    } = this.props;
    if (search !== '' && prevProps.searchBy !== searchBy) {
      const filter = { sortBy, searchBy, search };
      startSearch(filter);
    }
  }

  render() {
    const { search, movies } = this.props;
    return (
      <div className="page">
        <Header>
          <Search search={search}/>
        </Header>
        <ErrorBoundary className="global-error">
          {movies.length
            ? <React.Fragment>
              <FilmsResults count={movies.length}/>
              <DynamicMovieList movies={movies}/>
            </React.Fragment>
            : search && <Message text="No films found"/>}
        </ErrorBoundary>
        <AppFooter/>
      </div>
    );
  }
}

SearchPage.getInitialProps = async (context) => {
  const movieUrl = 'https://reactjs-cdp.herokuapp.com/movies?';
  const { search } = context.query;
  const { searchBy, sortBy } = context.reduxStore.getState();
  if (search !== '') {
    const filmsResult = await fetch(`${movieUrl}search=${search}&searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=desc`);
    const filmsJson = await filmsResult.json();
    const films = filmsJson.data.length ? filmsJson.data : [];
    context.reduxStore.dispatch(actions.setMovies(films));
    context.reduxStore.dispatch(actions.setSearch(search));
    return { search, films };
  }
  return { search, films: [] };
};

function mapStateToProps(state) {
  const { searchBy, sortBy } = state;
  return { searchBy, sortBy, movies: sortMovies(state) };
}

function mapDispatchToProps(dispatch) {
  return {
    startSearch: filter => dispatch(actions.fetchFilteredMovies(filter)),
    setMovies: films => dispatch(actions.setMovies(films)),
    setSearch: search => dispatch(actions.setSearch(search)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
