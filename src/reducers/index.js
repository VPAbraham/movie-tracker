import { combineReducers } from 'redux';
import { movies } from './movies';
import { users } from './users';
import { currentUser } from './currentUser';
import { favorites } from './favorites';
import { isLoggedIn } from './isLoggedIn';


export const rootReducer = combineReducers({
  movies,
  users,
  currentUser,
  favorites,
  isLoggedIn
});