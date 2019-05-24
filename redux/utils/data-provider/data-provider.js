// @flow
import getQueryUrl from '../query-builder/query-builder';

type Filter = {
  search: string,
  searchBy: string,
  sortBy: string };

export function getData(filter: Filter) {
  return fetch(getQueryUrl(filter))
    .then(res => res.json());
}

export function getMovie(id) {
  return fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
    .then(res => res.json());
}
