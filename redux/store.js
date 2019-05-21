import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const initialState = {
    searchBy: 'title',
    search: '',
    sortBy: 'release_date',
    films: [],
  }

  export function initializeStore (initState = initialState) {
  return createStore(reducer, initState, applyMiddleware(thunk))
}
