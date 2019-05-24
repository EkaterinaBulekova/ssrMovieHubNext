// @flow
import React from 'react';
import styles from './film-by-genre.css';


const FilmsByGenre = (props: { genres: string }) => (
  <div className = {styles.films_by_genre}>
    <div className = {styles.films_by_genre_text }>
      {`Films by ${props.genres} genre`}
    </div>
  </div>
);

export default FilmsByGenre;
