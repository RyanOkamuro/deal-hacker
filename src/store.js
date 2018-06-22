import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {favoriteReducer} from './reducers';

export default createStore(
    combineReducers({
        form: formReducer,
        favorite: favoriteReducer
    })
);