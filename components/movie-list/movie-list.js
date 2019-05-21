import React from 'react';
import {connect} from "react-redux";
import Movie from '../movie/movie';
import styles from "./movie-list.css";

const MovieList = (props) =>{
  const movieElements = props.movies.map((curmovie) =>
    <li key = {curmovie.id} className={styles.movie_list_element}>
        <Movie movie = {curmovie}/>
    </li>)
  return (
    <ul className={styles.movie_list_container}>
      {movieElements}
    </ul>
  )
}

function mapStateToProps(state){
  const {films} = state;
  return {films: films};
}

export default connect(mapStateToProps)(MovieList)