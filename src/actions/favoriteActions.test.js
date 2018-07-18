import {GET_FAVORITE, getFavorite, getAllFavorites, ADD_FAVORITE, addFavorite, addNewFavorite, REMOVE_FAVORITE, removeFavorite, removeOneFavorite} from './favoriteActions';
import {API_BASE_URL} from '../config';

describe('getFavorite', () => {
    it('Should return the action', () => {
        const deals = 'Dell XPS';
        const action = getFavorite(deals);
        expect(action.type).toEqual(GET_FAVORITE);
        expect(action.deals).toEqual(deals);
    });
});

describe('getAllFavorites', () => {
    it('Should dispatch getFavorite', () => {
        const deals = ["Dell XPS", "Fire Stick"];
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({ok: true, json(){
                return deals;
            }})
        })
        const dispatch = jest.fn();
        const getState = jest.fn().mockImplementation(() => {
            return {auth: {authToken: "1242141"}};
        })
        return getAllFavorites()(dispatch, getState)
        .then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/favorites`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer 1242141`,
                    'content-type': 'application/json'
                },
            })
            expect(dispatch).toHaveBeenCalledWith(getFavorite(deals))
        })
    });
});

describe('addFavorite', () => {
    it('Should return the action', () => {
        const deal = 'Dell XPS';
        const action = addFavorite(deal);
        expect(action.type).toEqual(ADD_FAVORITE);
        expect(action.deal).toEqual(deal);
    });
});

describe('addNewFavorite', () => {
    it('Should dispatch addFavorite', () => {
        const deal = ["Dell XPS", "Fire Stick"];
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({ok: true, json(){
                return deal;
            }})
        })
        const dispatch = jest.fn();
        const getState = jest.fn().mockImplementation(() => {
            return {auth: {authToken: "1242141"}};
        })
        return addNewFavorite()(dispatch, getState)
        .then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/favorites`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer 1242141`,
                    'Content-Type': 'application/json'
                },
                'dataType': 'json',
                body: JSON.stringify({})
            })
            expect(dispatch).toHaveBeenCalledWith(addFavorite(deal))
        })
    });
});

describe('removeFavorite', () => {
    it('Should return the action', () => {
        const dealId = '125121661';
        const action = removeFavorite(dealId);
        expect(action.type).toEqual(REMOVE_FAVORITE);
        expect(action.dealId).toEqual(dealId);
    });
});

describe('removeOneFavorite', () => {
    it('Should dispatch addFavorite', () => {
        const dealId = ["125121661", "125121662"];
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({ok: true, json(){
                return dealId;
            }})
        })
        const dispatch = jest.fn();
        const getState = jest.fn().mockImplementation(() => {
            return {auth: {authToken: "1242141"}};
        })
        return removeOneFavorite(dealId)(dispatch, getState)
        .then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/favorites/${dealId}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer 1242141`
                },
            })
            expect(dispatch).toHaveBeenCalledWith(removeFavorite(dealId))
        })
    });
});