import * as actions from '../actions/getFavorite';

const initialState = {
    dealItems: []
};

export const getFavoriteReducer = (state=initialState, action) => {
    if (action.type === actions.GET_FAVORITE) {
        return Object.assign({}, state, {
        // Object.assign generates
        // a new state object by merging an object
        // representing the new state of the lists
        // to the existing state, and in turn, that resulting 
        // object into an empty object, which ensures
        // that we're not mutating the original state object
        // ...state.dealsItems is the original state
        // action.deal is the new state     
        dealItems: action.deals.favorites
        })
    }
    return state;
}
