import {API_BASE_URL} from '../config';

export const GET_COMMENTS = 'GET_COMMENTS';
export const getComments = (comments, id) => ({
    type: GET_COMMENTS,
    comments, 
    id
});

export const getAllComments = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/deal/${id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json'
        },
    })
    .then(res => {
		if(!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	})
	.then(comments => {
		dispatch(getComments(comments, id));
	});
};
/////////////////////////////////////////////////////////////////

export const GET_UPDATED_COMMENTS_SUCCESS = 'GET_UPDATED_COMMENTS_SUCCESS';
export const getUpdateComments = comments => ({
    type: GET_UPDATED_COMMENTS_SUCCESS,
    comments
});


export const getAllUpdateComments = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/deal/${id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json'
        },
    })
    .then(res => {
		if(!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	})
	.then(comments => {
		dispatch(getUpdateComments(comments));
	});
};
/////////////////////////////////////////////////////////////////

export const ADD_COMMENTS = 'ADD_COMMENTS';
export const addComments = comments => ({
    type: ADD_COMMENTS,
    comments
});

export const addComment = (values, id, authToken) => (dispatch) => {
    return fetch(`${API_BASE_URL}/comments/${id}`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        },
        'dataType': 'json',
    })
        .then(res => {
            if (!res.ok) {
                if (
                    res.headers.has('content-type') &&
                    res.headers
                        .get('content-type')
                        .startsWith('application/json')
                ) {
                    //Detailed JSON error response
                    return res.json().then(err => Promise.reject(err));
                }
                // Less informative error returned by express
                return Promise.reject({
                    code: res.status,
                    message: res.statusText
                });
            }
            return res.json()
        })
        .then(comments => {
            dispatch(getUpdateComments(comments))
        })
};
/////////////////////////////////////////////////////////////////


export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const removeComment = id => ({
    type: REMOVE_COMMENT,
    id
});

export const removeOneComment = (id, dealId) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/comments/${id}/${dealId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        },
    })
    .then(res => {
		if(!res.ok) {
			return Promise.reject(res.statusText);
		}
	})
	.then(() => {
		dispatch(removeComment(id));
	});
};