import {GET_COMMENTS, getComments, getAllComments, GET_UPDATED_COMMENTS_SUCCESS, getUpdateComments, getAllUpdateComments, ADD_COMMENTS, addComments, addComment} from './commentActions';
import {API_BASE_URL} from '../config';

describe('getComments', () => {
    it('Should return the action', () => {
        const comments = 'Great product';
        const id = '5b397dafa2ef6e07d444f6c9';
        const action = getComments(comments, id);
        expect(action.type).toEqual(GET_COMMENTS);
        expect(action.comments).toEqual(comments);
        expect(action.id).toEqual(id); 
    });
});

describe('getAllComments', () => {
    it('Should dispatch getComments', () => {
        const comments = ['Great product', 'Great'];
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({ok: true, json(){
                return comments;
            }})
        })
        const dispatch = jest.fn();
        const getState = jest.fn().mockImplementation(() => {
            return {auth: {authToken: '1242141'}};
        })
        const id = '15290816';
        return getAllComments(id)(dispatch, getState)
        .then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/deal/${id}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer 1242141`,
                    'content-type': 'application/json'
                },
            })
            expect(dispatch).toHaveBeenCalledWith(getComments(comments, id))
        })
    });
});

describe('getUpdateComments', () => {
    it('Should return the action', () => {
        const comments = 'Great product';
        const action = getUpdateComments(comments);
        expect(action.type).toEqual(GET_UPDATED_COMMENTS_SUCCESS);
        expect(action.comments).toEqual(comments);
    });
});

describe('getAllUpdateComments', () => {
    it('Should dispatch getUpdateComments', () => {
        const comments = ['Great product', 'Great'];
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({ok: true, json(){
                return comments;
            }})
        })
        const dispatch = jest.fn();
        const getState = jest.fn().mockImplementation(() => {
            return {auth: {authToken: '1242141'}};
        })
        const id = '15290816';
        return getAllUpdateComments(id)(dispatch, getState)
        .then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/deal/${id}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer 1242141`,
                    'content-type': 'application/json'
                },
            })
            expect(dispatch).toHaveBeenCalledWith(getUpdateComments(comments, id))
        })
    });
});

describe('addComments', () => {
    it('Should return the action', () => {
        const comments = 'Great product';
        const action = addComments(comments);
        expect(action.type).toEqual(ADD_COMMENTS);
        expect(action.comments).toEqual(comments);
    });
});

describe('addComment', () => {
    it('Should dispatch addComments', () => {
        const comments = ['Best investment I have made', 'Great price'];
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({ok: true, json(){
                return comments;
            }})
        })
        const dispatch = jest.fn();
        const authToken = '1242141';
        const id = '15290816';
        return addComment(comments, id, authToken)(dispatch)
        .then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/comments/${id}`, {
                method: 'POST',
                body: JSON.stringify(comments),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer 1242141`
                },
                'dataType': 'json'
            })
            expect(dispatch).toHaveBeenCalledWith(getUpdateComments(comments))
        })
    });
});