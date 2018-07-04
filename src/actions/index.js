import {API_BASE_URL} from '../config';

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const addFavorite = deal => ({
    type: ADD_FAVORITE,
    deal
}); 

export const addNewFavorite = deal => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const user = getState().auth.currentUser.username;
    return fetch(`${API_BASE_URL}/favorites`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        'dataType': 'json',
        
        body: JSON.stringify({id: deal})
    })
    .then(res => {
		if(!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	})
	.then(deal => {
        dispatch(addFavorite(deal));
	});
};
