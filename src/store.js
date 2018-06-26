import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {favoriteReducer} from './reducers';
// import thunk from 'redux-thunk';

export default createStore(
    combineReducers({
        form: formReducer,
        favorite: favoriteReducer,
        // ThunkMiddleware: applyMiddleware(thunk)
    })
);