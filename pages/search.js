import React from "react";
import {connect} from "react-redux";
import Header from "../components/header/header";
import AppFooter from "../components/footer/footer.js"
import Search from "../components/search/search";
import { ErrorBoundary } from "../components/error-boundary/error-boundary";
import FilmsResults from '../components/films-results/films-results';
import MovieList from "../components/movie-list/movie-list";
import Message from "../components/message/message";
import fetch from 'isomorphic-unfetch';
import * as actions from "../redux/action";

export class SearchPage extends React.Component{
  componentDidUpdate(prevProps){
    const {startSearch, searchBy, sortBy, search} = this.props;
    if (prevProps.sortBy !== sortBy || prevProps.searchBy !== searchBy){
        const filter ={sortBy, searchBy, search};    
      startSearch(filter);
    }
  }

  render(){
    const {search, movies} = this.props;
    return (
      <div className="page">
        <Header>
          <Search search={search}/>
        </Header>
        <ErrorBoundary className="global-error">
          {movies.length
            ? <React.Fragment>
                <FilmsResults count={movies.length}/>
                <MovieList movies={movies}/>
              </React.Fragment>
            : search && <Message text="No films found"/>}
        </ErrorBoundary>
        <AppFooter/>
      </div>
    );
  }
}

SearchPage.getInitialProps = async function(context) {
  const movieUrl ="https://reactjs-cdp.herokuapp.com/movies?";
  const { search } = context.query;
  const { searchBy, sortBy} = context.reduxStore.getState();
  console.log(searchBy, sortBy);
  if (search !== ""){
    const filmsResult = await fetch(movieUrl + `search=${search}&searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=desc`);
    const filmsJson = await filmsResult.json(); 
    const films = filmsJson.data.length ? filmsJson.data :[];
    console.log(`Fetched films: ${films.length}`);
    context.reduxStore.dispatch(actions.setMovies(films));
    context.reduxStore.dispatch(actions.setSearch(search));
    return { search, films };
  }else{
    return { search, films:[] };
  }
}

function mapStateToProps(state){
  const {searchBy, sortBy, films} = state;
  return {searchBy: searchBy, sortBy: sortBy, movies: films};
}

function mapDispatchToProps(dispatch){
  return {
    startSearch: (filter) => dispatch(actions.fetchFilteredMovies(filter)),
    setMovies: (films) => dispatch(actions.setMovies(films)),
    setSearch: (search) => dispatch(actions.setSearch(search)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)