import {getComments, getUpdateComments} from '../actions/commentActions';
import {commentReducer} from './commentReducer';

describe('Get Comments', () => {
    it('Should get all the comments', () => {
        let state = {
            allComments: []
        };
        let comments = ['Great product', 'I like it'];
        state = commentReducer(state, getComments(comments, 'abcde12345'))
        expect(state).toEqual({
          allComments: comments.comments
        })
    });
    it('Should get an updated comment', () => {
        let state = {
            allComments: [{id:'12345', comment:'Great product'}, {id:'1234', comment: 'I like it'}]
        };
        const updateComment = {id: '12345', comment: 'New comment'};
        state = commentReducer(state, getUpdateComments(updateComment));
        let updatedComment = state.allComments;
        expect(updatedComment).toEqual(updateComment);
    });
})