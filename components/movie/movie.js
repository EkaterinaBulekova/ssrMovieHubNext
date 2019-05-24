// @flow
import React, { PureComponent } from 'react';
import Link from 'next/link';
import styles from './movie.css';

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

class Movie extends PureComponent<{ movie: MovieType }> {
  render() {
    const { movie } = this.props;
    return (
      <Link as={`/film/${movie.id}`} href={`/film?id=${movie.id}`}>
        <div className={styles.movie_card} >
          <img className={styles.movie_img} src={movie.poster_path}></img>
          <div className={styles.movie_info}>
            <div className={styles.movie_title}>{movie.title}</div>
            <div className={styles.movie_release_box}>
              <div className={styles.movie_release_date}>
                {(new Date(movie.release_date)).getFullYear().toString()}
              </div>
            </div>
            <div className={styles.movie_genres}>{movie.genres.toString()}</div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Movie;
