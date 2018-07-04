import * as actions from '../actions/getComments';
import * as UpdateCommentsAction from '../actions/getUpdatedComments';

const initialState = {
    allComments: []
};

export const getCommentsReducer = (state=initialState, action) => {
    console.log(action);
    console.log(state);
    if (action.type === actions.GET_COMMENTS) {
        return Object.assign({}, state, {
        // Object.assign generates
        // a new state object by merging an object
        // representing the new state of the lists
        // to the existing state, and in turn, that resulting 
        // object into an empty object, which ensures
        // that we're not mutating the original state object
        // ...state.dealsItems is the original state
        // action.deal is the new state     
        allComments: [...state.allComments, ...action.comments.comments]
        // allComents: { ...state.allComents, [action.id]: { ...state.allComents[action.id], actions.comments } }
        })
    }
    // allComments: state.allComments.map(comment => {
//     console.log(comment);
//     console.log(action.comments)
//     if (action.comment.productId === action.comments.comments.id) {
//         return action.comments;
        
//     } else {
//         return comment;
//     }
// })
// })
// }
// return state;
// }


    // if (action.type === UpdateCommentsAction.UPDATE_COMMENTS_SUCCESS) {
    //     console.log(action);
    //     return Object.assign({}, state, {   
    //     allComments: state.allComments.map(item => {
    //         console.log(item);
    //         if (item._id === action.data.id){
    //             return action.data;
    //         } else {
    //             return item;
    //         }
    //     })
    //     })
    // }
    return state;
}

