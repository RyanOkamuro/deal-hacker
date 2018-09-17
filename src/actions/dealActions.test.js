import {GET_DEALS, getDeals, getAllDeals, GET_UPDATE_DEAL_SUCCESS, getUpdateDeal, getAllUpdateDeals, ADD_DEALS, addDeals, addDeal, EDIT_DEALS, editDeal, editedDeal, REMOVE_DEAL, removeDeal, removeOneDeal} from './dealActions';
import {API_BASE_URL} from '../config';

describe('getDeals', () => {
    it('Should return the action', () => {
        const deals = 'Dell XPS';
        const action = getDeals(deals);
        expect(action.type).toEqual(GET_DEALS);
        expect(action.deals).toEqual(deals);
    });
});

describe('getAllDeals', () => {
    it('Should dispatch getDeals', () => {
        const deals = ['Dell XPS', 'Fire Stick'];
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({ok: true, json(){
                return deals;
            }})
        })
        const dispatch = jest.fn();
        return getAllDeals()(dispatch)
        .then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/deal`, {
                method: 'GET',
                headers: {
                  'content-type': 'application/json'
                },
            })
            expect(dispatch).toHaveBeenCalledWith(getDeals(deals))
        })
    });
});

describe('getUpdateDeal', () => {
    it('Should return the action', () => {
        const deals = 'Dell XPS';
        const action = getUpdateDeal(deals);
        expect(action.type).toEqual(GET_UPDATE_DEAL_SUCCESS);
        expect(action.deals).toEqual(deals);
    });
});

describe('getAllUpdateDeals', () => {
    it('Should dispatch getUpdateDeal', () => {
        const deals = ['Dell XPS', 'Fire Stick'];
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({ok: true, json(){
                return deals;
            }})
        })
        const dispatch = jest.fn();
        return getAllUpdateDeals()(dispatch)
        .then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/deal`, {
                method: 'GET',
                headers: {
                  'content-type': 'application/json'
                },
            })
            expect(dispatch).toHaveBeenCalledWith(getUpdateDeal(deals))
        })
    });
});

describe('addDeals', () => {
    it('Should return the action', () => {
        const deals = 'Fire Stick';
        const action = addDeals(deals);
        expect(action.type).toEqual(ADD_DEALS);
        expect(action.deals).toEqual(deals);
    });
});

describe('addDeal', () => {
    it('Should dispatch addDeals', () => {
        const deals = ['Apple Watch 3', 'Fire Stick'];
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({ok: true, json(){
                return deals;
            }})
        })
        const dispatch = jest.fn();
        const authToken = '1242141';
        return addDeal(deals, authToken)(dispatch)
        .then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/deal`, {
                method: 'POST',
                body: JSON.stringify(deals),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer 1242141`
                }
            })
            expect(dispatch).toHaveBeenCalledWith(addDeals(deals))
        })
    });
});

describe('editDeal', () => {
    it('Should return the action', () => {
        const deals = 'Fire Stick';
        const action = editDeal(deals);
        expect(action.type).toEqual(EDIT_DEALS);
        expect(action.deals).toEqual(deals);
    });
});

describe('editedDeal', () => {
    it('Should dispatch editDeal', () => {
        const deals = ['Apple Watch 3', 'Fire Stick'];
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({ok: true, json(){
                return deals;
            }})
        })
        const dispatch = jest.fn();
        const productId = '15290816';
        return editedDeal(deals, productId)(dispatch)
        .then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/deal/${productId}`, {
                method: 'PUT',
                body: JSON.stringify(deals),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            expect(dispatch).toHaveBeenCalledWith(getUpdateDeal(deals))
        })
    });
});

describe('removeDeal', () => {
    it('Should return the action', () => {
        const dealId = '125121661';
        const action = removeDeal(dealId);
        expect(action.type).toEqual(REMOVE_DEAL);
        expect(action.dealId).toEqual(dealId);
    });
});

describe('removeOneDeal', () => {
    it('Should dispatch removeDeal', () => {
        const dealId = ['125121661', '125121662'];
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({ok: true, json(){
                return dealId;
            }})
        })
        const dispatch = jest.fn();
        const getState = jest.fn().mockImplementation(() => {
            return {auth: {authToken: '1242141'}};
        })
        return removeOneDeal(dealId)(dispatch, getState)
        .then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/deal/${dealId}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer 1242141`
                },
            })
            expect(dispatch).toHaveBeenCalledWith(removeDeal(dealId))
        })
    });
});
