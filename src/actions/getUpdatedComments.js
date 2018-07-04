import {API_BASE_URL} from '../config';

export const UPDATE_COMMENTS_SUCCESS = 'UPDATE_COMMENTS_SUCCESS';
export const getUpdateComments = comments => ({
    type: UPDATE_COMMENTS_SUCCESS,
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

