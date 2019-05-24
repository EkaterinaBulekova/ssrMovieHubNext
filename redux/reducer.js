import { types } from './action';

const initialState = {
  searchBy: 'title',
  search: '',
  sortBy: 'release_date',
  films: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
  case types.SET_SEARCH_BY:
    return { ...state, searchBy: action.payload };
  case types.SET_SEARCH:
    return { ...state, search: action.payload };
  case types.SET_SORT_BY:
    return { ...state, sortBy: action.payload };
  case types.SET_MOVIES_BY_FILTER:
    return { ...state, films: action.payload };
  default:
    return state;
  }
}
