import React from "react";
import Header from "../components/header/header";
import AppFooter from "../components/footer/footer.js"
import MovieDetail from "../components/movie-detail/movie-detail";
import Button from "../components/button/button";
import { ErrorBoundary } from "../components/error-boundary/error-boundary";
import FilmsByGenre from '../components/films-by-genre/films-by-genre';
import MovieList from "../components/movie-list/movie-list";
import styles from "./styles/movie-page.css"
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const MoviePage = ({ film, films }) => (
      <div className="page">
        {
          film &&
        <Header>
          <Link href="/">
            <Button className={styles.search_button} name="SEARCH" />
          </Link>
          <MovieDetail movie={film}/>
          <FilmsByGenre genres={film.genres}/>
        </Header>
        }
        <ErrorBoundary className="global-error">
          <MovieList movies={films}/>
        </ErrorBoundary>
        <AppFooter/>
      </div>
)

MoviePage.getInitialProps = async function(context) {
  const movieUrl ="https://reactjs-cdp.herokuapp.com/movies/";
  const { id } = context.query;
  const filmResult = await fetch(movieUrl + id);
  const film = await filmResult.json();

  console.log(`Fetched film: ${film.title}`);

  const filmsResult = await fetch(movieUrl + "?filter=" + film.genres.join(","))
  const filmsJson = await filmsResult.json();
  const films = filmsJson.data;

  console.log(`Fetched films: ${films.length}`);

  return { film, films }
}

export default MoviePage
