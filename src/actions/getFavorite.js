import {API_BASE_URL} from '../config';

export const GET_FAVORITE = 'GET_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const getFavorite = deals => ({
    type: GET_FAVORITE,
    deals
});

export const getAllFavorites = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/favorites`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        },
    })
    .then(res => {
		if(!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	})
	.then(deals => {
		dispatch(getFavorite(deals));
	});
};