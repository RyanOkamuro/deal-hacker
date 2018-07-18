import * as actions from '../actions/favoriteActions';

const initialState = {
    dealItems: []
};

export const favoriteReducer = (state=initialState, action) => {
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

    if (action.type === actions.ADD_FAVORITE) {
        if (state.dealItems.find(item =>  {
            item._id === action.deal.favorites._id;
        }))
        {
        return state
        }
        return Object.assign({}, state, [...state.dealItems, action.deal])
      }


    if (action.type === actions.REMOVE_FAVORITE) {
        console.log(action, state.dealItems);
        return Object.assign({}, state, {
        // Object.assign generates
        // a new state object by merging an object
        // representing the new state of the lists
        // to the existing state, and in turn, that resulting 
        // object into an empty object, which ensures
        // that we're not mutating the original state object
        // ...state.dealsItems is the original state
        // action.deal is the new state     
        dealItems: state.dealItems.filter(dealItem => {
            if (dealItem._id === action.dealId) {
                return false
            }
            return true
        }) 
        })
    }
    return state;
}
