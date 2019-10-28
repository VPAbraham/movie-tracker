import { combineReducers } from 'redux';
import { movies } from './movies';
import { user } from './user';
import { favorites } from './favorites';

export const rootReducer = combineReducers({
  movies,
  user,
  favorites
});