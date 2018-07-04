import {API_BASE_URL} from '../config';

export const UPDATE_DEAL_SUCCESS = 'UPDATE_DEAL_SUCCESS';
export const getUpdateDeal = deals => ({
    type: UPDATE_DEAL_SUCCESS,
    deals
});

export const getAllUpdateDeals = () => dispatch => {
    return fetch(`${API_BASE_URL}/deal`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    })
    .then(res => {
		if(!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	})
	.then(deals => {
		dispatch(getUpdateDeal(deals));
	});
};