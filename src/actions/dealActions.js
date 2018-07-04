import {API_BASE_URL} from '../config';

export const GET_DEALS = 'GET_DEALS';
export const getDeals = deals => ({
    type: GET_DEALS,
    deals
});

export const getAllDeals = () => dispatch => {
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
		dispatch(getDeals(deals));
	});
};


export const GET_UPDATE_DEAL_SUCCESS = 'GET_UPDATE_DEAL_SUCCESS';
export const getUpdateDeal = deals => ({
    type: GET_UPDATE_DEAL_SUCCESS,
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