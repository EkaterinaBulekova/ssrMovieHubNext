/* eslint-disable linebreak-style */
import { createSelector } from 'reselect';
import moment from 'moment';

const getMovies = state => state.films;
const getSortingType = state => state.sortBy;

const sortByRating = (movie1, movie2) => (
  (Number(movie1.vote_count) <= Number(movie2.vote_count)) ? 1 : -1);

const sortByReleaseDate = (movie1, movie2) => (
  (moment(movie1.realese_date).isSameOrBefore(moment(movie2.realese_date))) ? 1 : -1);

const sortMovies = createSelector(
  [getMovies, getSortingType],
  (movies, sortingType) => movies.slice(0, movies.length)
    .sort(sortingType === 'vote_average' ? sortByRating : sortByReleaseDate),
);

export default sortMovies;
