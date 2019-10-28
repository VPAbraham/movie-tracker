import { combineReducers } from 'redux';
import { movies } from './movies';
import { user } from './user';
import { favorites } from './favorites';
import { isLoggedIn } from './isLoggedIn';


export const rootReducer = combineReducers({
  movies,
  user,
  favorites,
  isLoggedIn
});