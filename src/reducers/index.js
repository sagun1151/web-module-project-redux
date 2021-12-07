import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoriteReducer from './favoritesReducer';

const rootReducer = combineReducers({
    movieReducer: movieReducer,
    favoriteReducer: favoriteReducer

})

export default rootReducer;