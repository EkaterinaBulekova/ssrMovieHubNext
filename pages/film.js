// @flow
import React from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Header from '../components/header/header';
import AppFooter from '../components/footer/footer';
import Button from '../components/button/button';
import ErrorBoundary from '../components/error-boundary/error-boundary';
import FilmsByGenre from '../components/films-by-genre/films-by-genre';
import styles from './styles/movie-page.css';

const DynamicMovieList = dynamic({
  loader: () => import('../components/movie-list/movie-list'),
  // eslint-disable-next-line react/display-name
  loading: () => (<p>Loading ...</p>),
  ssr: false,
});

const DynamicMovieDetail = dynamic({
  loader: () => import('../components/movie-detail/movie-detail'),
  // eslint-disable-next-line react/display-name
  loading: () => <p>Loading ...</p>,
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

const MoviePage = ({ film, films }: { film: MovieType, films: Array<MovieType> }) => (
  <div className="page">
    {
      film
    && <Header>
      <Link href="/">
        <Button className={styles.search_button} name="SEARCH" />
      </Link>
      <DynamicMovieDetail movie={film}/>
      <FilmsByGenre genres={film.genres}/>
    </Header>
    }
    <ErrorBoundary className="global-error">
      <DynamicMovieList movies={films}/>
    </ErrorBoundary>
    <AppFooter/>
  </div>
);

MoviePage.getInitialProps = async (context) => {
  const movieUrl = 'https://reactjs-cdp.herokuapp.com/movies/';
  const { id } = context.query;
  const filmResult = await fetch(movieUrl + id);
  const film = await filmResult.json();

  const filmsResult = await fetch(`${movieUrl}?filter=${film.genres.join(',')}`);
  const filmsJson = await filmsResult.json();
  const films = filmsJson.data;

  return { film, films };
};

export default MoviePage;
