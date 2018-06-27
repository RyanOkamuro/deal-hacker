
// import {SubmissionError} from 'redux-form';
// import {API_BASE_URL} from '../config';

// export const ADD_DEAL = 'ADD_DEAL';
// export const addDeal = newSingleDeal => ({
//     type: ADD_DEAL,
//     newSingleDeal
// });

// export const addNewDeal = values => dispatch => {
//     return fetch(`${API_BASE_URL}/deal`, {
//         method: 'POST',
//         body: JSON.stringify(values),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(res => {
//         if (!res.ok) {
//             if (
//                 res.headers.has('content-type') &&
//                 res.headers
//                     .get('content-type')
//                     .startsWith('application/json')
//             ) {
//                 //Detailed JSON error response
//                 return res.json().then(err => Promise.reject(err));
//             }
//             // Less informative error returned by express
//             return Promise.reject({
//                 code: res.status,
//                 message: res.statusText
//             });
//         }
//         return;
//     })   
// }





        