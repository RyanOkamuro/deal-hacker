// import * as actions from '../actions/removeFavorite';

// const initialState = {
//     dealItems: []
// };

// export const removeFavoriteReducer = (state=initialState, action) => {
//     console.log(action);
//     if (action.type === actions.REMOVE_FAVORITE) {
//         console.log(action.deals);
//         return Object.assign({}, state, {
//         // Object.assign generates
//         // a new state object by merging an object
//         // representing the new state of the lists
//         // to the existing state, and in turn, that resulting 
//         // object into an empty object, which ensures
//         // that we're not mutating the original state object
//         // ...state.dealsItems is the original state
//         // action.deal is the new state     
//         dealItems: action.deals.favorites
//         })
//     }
//     return state;
// }
