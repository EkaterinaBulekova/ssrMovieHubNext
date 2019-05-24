import { getData } from './utils/data-provider/data-provider';

export const types = {
  SET_MOVIES_BY_FILTER: 'SET_MOVIES_BY_FILTER',
  SET_SEARCH_BY: 'SET_SEARCH_BY',
  SET_SEARCH: 'SET_SEARCH',
  SET_SORT_BY: 'SET_SORT_BY',
};

export function setMovies(data) {
  return {
    type: types.SET_MOVIES_BY_FILTER,
    payload: data,
  };
}

export function fetchFilteredMovies(filter) {
  return (dispatch) => {
    return getData(filter).then(({ data }) => {
      dispatch(setMovies(data));
    });
  };
}

export function setSearch(search) {
  return {
    type: types.SET_SEARCH,
    payload: search,
  };
}

export function setSearchBy(searchBy) {
  return {
    type: types.SET_SEARCH_BY,
    payload: searchBy,
  };
}

export function setSortBy(sortBy) {
  return {
    type: types.SET_SORT_BY,
    payload: sortBy,
  };
}
