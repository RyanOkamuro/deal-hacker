import * as actions from '../actions';

const initialState = {
    dealItems: []
};

export const favoriteReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_FAVORITE) {
        return Object.assign({}, state, {
        // Object.assign generates
        // a new state object by merging an object
        // representing the new state of the lists
        // to the existing state, and in turn, that resulting 
        // object into an empty object, which ensures
        // that we're not mutating the original state object,     
        dealItems: [...state.dealItems, action.deal]
    })
}
    return state
}
