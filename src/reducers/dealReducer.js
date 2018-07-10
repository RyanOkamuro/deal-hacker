import * as actions from '../actions/dealActions';
import * as updateDealAction from '../actions/dealActions';

const initialState = {
    allDeals: []
};

export const dealReducer = (state=initialState, action) => {
    if (action.type === actions.GET_DEALS) {
        return Object.assign({}, state, {
        // Object.assign generates
        // a new state object by merging an object
        // representing the new state of the lists
        // to the existing state, and in turn, that resulting 
        // object into an empty object, which ensures
        // that we're not mutating the original state object  
        allDeals: action.deals.dealItem
        })
    }
    if (action.type === updateDealAction.GET_UPDATE_DEAL_SUCCESS) {
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
