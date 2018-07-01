import * as actions from '../actions/getDeal';

const initialState = {
    allDeals: []
};

export const getDealReducer = (state=initialState, action) => {
    if (action.type === actions.GET_DEALS) {
        return Object.assign({}, state, {
        // Object.assign generates
        // a new state object by merging an object
        // representing the new state of the lists
        // to the existing state, and in turn, that resulting 
        // object into an empty object, which ensures
        // that we're not mutating the original state object
        // ...state.dealsItems is the original state
        // action.deal is the new state     
        allDeals: [...state.allDeals, ...action.deals.dealItem]
        })
    }
    return state;
}
