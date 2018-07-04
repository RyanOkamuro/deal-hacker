import * as actions from '../actions/getDeal';
import * as UpdateActions from '../actions/getUpdatedDeal';

const initialState = {
    allDeals: []
};

export const getDealReducer = (state=initialState, action) => {
    if (action.type === actions.GET_DEALS) {
        console.log(action);
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
    if (action.type === UpdateActions.UPDATE_DEAL_SUCCESS) {
        console.log(action);
        return Object.assign({}, state, {   
        allDeals: state.allDeals.map(item => {
            console.log(item);
            if (item.id === action.data._id){
                return action.data;
            } else {
                return item;
            }
        })
        })
    }
    return state;
}
