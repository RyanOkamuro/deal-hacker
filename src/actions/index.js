import {API_BASE_URL} from '../config';

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const addFavorite = deal => ({
    type: ADD_FAVORITE,
    deal
}); 

export const addNewFavorite = deal => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const user = getState().auth.currentUser.username;
    return fetch(`${API_BASE_URL}/api/users/favorites`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify(deal)
    })
    .then(res => {
		if(!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	})
	.then(deal => {
		dispatch(addFavorite(user));
	});
};
