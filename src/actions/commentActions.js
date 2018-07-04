import {API_BASE_URL} from '../config';

export const GET_COMMENTS = 'GET_COMMENTS';
export const getComments = (comments, id) => ({
    type: GET_COMMENTS,
    comments, 
    id
});

export const getAllComments = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const user = getState().auth.currentUser.username;
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


export const GET_UPDATED_COMMENTS_SUCCESS = 'GET_UPDATED_COMMENTS_SUCCESS';
export const getUpdateComments = comments => ({
    type: GET_UPDATED_COMMENTS_SUCCESS,
    comments
});


export const getAllUpdateComments = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const user = getState().auth.currentUser.username;
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

