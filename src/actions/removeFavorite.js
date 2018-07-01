import {API_BASE_URL} from '../config';
import {getFavorite} from './getFavorite';

// export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
// export const removeFavorite = dealId => ({
//     type: REMOVE_FAVORITE,
//     dealId
// });

// export const removeOneFavorite = (dealId) => (dispatch, getState) => {
export const removeOneFavorite = (dealId) => (dispatch, getState) => {
    console.log(dealId);
    const authToken = getState().auth.authToken;
    const user = getState().auth.currentUser.username;
    return fetch(`${API_BASE_URL}/favorites/${dealId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        },
    })
    .then(res => {
        console.log(res);
		if(!res.ok) {
			return Promise.reject(res.statusText);
		}
	})
	// .then(deal => {
	// 	dispatch(getFavorite(user));
	// });
};