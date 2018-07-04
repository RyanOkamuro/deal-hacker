import {API_BASE_URL} from '../config';

export const GET_FAVORITE = 'GET_FAVORITE';
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


export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const removeFavorite = dealId => ({
    type: REMOVE_FAVORITE,
    dealId
});

export const removeOneFavorite = (dealId) => (dispatch, getState) => {
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
		if(!res.ok) {
			return Promise.reject(res.statusText);
		}
	})
	.then(() => {
		dispatch(removeFavorite(dealId));
	});
};