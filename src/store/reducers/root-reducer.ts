import {combineReducers} from 'redux';
import NameSpace from '../name-space';
import {reducer as shownFilms} from './shown-films/shown-films-reducer';
import {reducer as user} from './user/user-reducer';
import {reducer as films} from './films/films-reducer';
import {reducer as comments} from './comments/comments-reducer';
import {reducer as favoriteFilms} from './favorite-film/favorite-film-reducer';
import {reducer as promoFilms} from './promo-film/promo-film-reducer';

const rootReducer = combineReducers({
  [NameSpace.SHOWN_FILM]: shownFilms,
  [NameSpace.FILMS]: films,
  [NameSpace.USER]: user,
  [NameSpace.PROMO_FILM]: promoFilms,
  [NameSpace.FAVORITE_FILM]: favoriteFilms,
  [NameSpace.COMMENTS]: comments,
});


export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;