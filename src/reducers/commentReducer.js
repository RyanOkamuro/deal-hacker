import * as actions from '../actions/commentActions';
import * as UpdateCommentsAction from '../actions/commentActions';

const initialState = {
    allComments: []
};

export const commentReducer = (state=initialState, action) => {
    if (action.type === actions.GET_COMMENTS) {
        return Object.assign({}, state, {
        // Object.assign generates
        // a new state object by merging an object
        // representing the new state of the lists
        // to the existing state, and in turn, that resulting 
        // object into an empty object, which ensures
        // that we're not mutating the original state object
        allComments: action.comments.comments
        })
    }
    if (action.type === UpdateCommentsAction.GET_UPDATED_COMMENTS_SUCCESS) {
        return Object.assign({}, state, {   
            allComments: action.comments
        })
    }
    return state;
}


