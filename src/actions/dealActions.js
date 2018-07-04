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


export const EDIT_DEALS = 'EDIT_DEALS';
export const editDeal = deals => ({
    type: EDIT_DEALS,
    deals
});

// export const getEditedDeal = () => dispatch => {
//     return fetch(`${API_BASE_URL}/deal/${productID}`, {
//         method: 'PUT',
//         body: JSON.stringify(values),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//         .then(res => {
//             if (!res.ok) {
//                 if (
//                     res.headers.has('content-type') &&
//                     res.headers
//                         .get('content-type')
//                         .startsWith('application/json')
//                 ) {
//                     //Detailed JSON error response
//                     return res.json().then(err => Promise.reject(err));
//                 }
//                 // Less informative error returned by express
//                 return Promise.reject({
//                     code: res.status,
//                     message: res.statusText
//                 });
//             }
//             if (res.ok) {
//                 return res.json().then(data => this.props.dispatch({type: 'GET_UPDATE_DEAL_SUCCESS', data}))
//             }
//             return;
//         })
// }