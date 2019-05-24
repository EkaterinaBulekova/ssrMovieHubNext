// @flow
import React from 'react';
import styles from './movie-detail.css';

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

const MovieDetail = ({ movie }: { movie: MovieType }) => (movie ? (
  <div className={styles.movie_detail}>
    <div className={styles.movie_detail_img_box}>
      <img className={styles.movie_detail_img} src={movie.poster_path}></img>
    </div>
    <div className={styles.movie_detail_info}>
      <div className={styles.movie_detail_group}>
        <div className={styles.movie_detail_title}>{movie.title}</div>
        <div className={styles.movie_detail_rating}>{movie.vote_average}</div>
      </div>
      <div className={styles.movie_detail_group}>
        <div className={styles.movie_detail_release_date}>
          {(new Date(movie.release_date)).getFullYear().toString()}
        </div>
        <div className={styles.movie_detail_duration}>{movie.runtime && `${movie.runtime} min`}</div>
      </div>
      <div className={styles.movie_detail_group}>
        <div className={styles.movie_detail_description}>{movie.overview}</div>
      </div>
    </div>
  </div>
) : null);

export default MovieDetail;
