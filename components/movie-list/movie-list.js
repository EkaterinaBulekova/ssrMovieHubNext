// @flow
import React from 'react';
import { connect } from 'react-redux';
import Movie from '../movie/movie';
import styles from './movie-list.css';

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

const MovieList = ({ movies }: Array<MovieType>) => {
  const movieElements = movies.map(curmovie => (
    <li key = {curmovie.id} className={styles.movie_list_element}>
      <Movie movie = {curmovie}/>
    </li>
  ));
  return (
    <ul className={styles.movie_list_container}>
      {movieElements}
    </ul>
  );
};

function mapStateToProps(state) {
  const { films } = state;
  return { films };
}

export default connect(mapStateToProps)(MovieList);
