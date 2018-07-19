import {getFavorite, addFavorite, removeFavorite} from '../actions/favoriteActions';
import {favoriteReducer} from './favoriteReducer';

describe('Get Favorite', () => {
    it('Should get all the user favorites', () => {
        let state = {
            dealItems: []
        };
        let favorites = [[{commentCreatedAt: '2018-07-14T15:26:56.647Z', _id: '5b3a6b943ad5b048e4c643f3', comment: 'Perfect fit', user: '5b4392effa58974870cbd184', username: 'JohnnyRocket'}], {createdAt: '2018-07-12T16:06:46.067Z', dealLink: 'https://www.uniqlo.com/us/en/men-ultra-stretch-skinny-fit-jeans-401513.html?dwvar_401513_color=COL68&cgid=men-multibuy-pants-and-jeans#start=11&cgid=men-multibuy-pants-and-jeans', dealName: 'Uniqlo Ultra Skinny Jeans', image: 'https://uniqlo.scene7.com/is/image/UNIQLO/goods_68_401513?$pdp-medium$', price: 49.99, productCategory: 'Home Needs', productDescription: 'MEN ULTRA STRETCH SKINNY FIT JEANS buy 2 get $10 off.', seller: 'UNIQLO', _id: '5b3a6b943ad5b048e4c643f3'}];
        state = favoriteReducer(state, getFavorite(favorites))
        expect(state).toEqual({
            dealItems: favorites.favorites
        })
    });
})

describe('Add Favorite', () => {
    it('Should add a new user favorite', () => {
        let state = {
            dealItems: [[{commentCreatedAt: '2018-07-14T15:26:56.647Z', _id: '5b3a6b943ad5b048e4c643f3', comment: 'Perfect fit', user: '5b4392effa58974870cbd184', username: 'JohnnyRocket'}], {createdAt: '2018-07-12T16:06:46.067Z', dealLink: 'https://www.uniqlo.com/us/en/men-ultra-stretch-skinny-fit-jeans-401513.html?dwvar_401513_color=COL68&cgid=men-multibuy-pants-and-jeans#start=11&cgid=men-multibuy-pants-and-jeans', dealName: 'Uniqlo Ultra Skinny Jeans', image: 'https://uniqlo.scene7.com/is/image/UNIQLO/goods_68_401513?$pdp-medium$', price: 49.99, productCategory: 'Home Needs', productDescription: 'MEN ULTRA STRETCH SKINNY FIT JEANS buy 2 get $10 off.', seller: 'UNIQLO', _id: '5b3a6b943ad5b048e4c643f3'}, [{commentCreatedAt: '2018-07-14T15:26:56.647Z', _id: '5b2eac8e9cc1724aa388a50b', comment: 'Great laptop for the price!', user: '5b4392effa58974870cbd184', username: 'JohnnyRocket'}], {createdAt: '2018-07-12T16:06:46.067Z', dealLink: 'www.dell.com', dealName: 'Dell XPS', image: 'www.dellimage.com', price: 799.99, productCategory: 'Electronics', productDescription: 'Dell XPS', seller: 'Dell', _id: '5b2eac8e9cc1724aa388a50b'}]
        };
        let favorites = {favorites: [[{commentCreatedAt: '2018-07-14T15:26:56.647Z', _id: '5b3a6b943ad5b048e4c643f3', comment: 'Perfect fit', user: '5b4392effa58974870cbd184', username: 'JohnnyRocket'}], {createdAt: '2018-07-12T16:06:46.067Z', dealLink: 'https://www.uniqlo.com/us/en/men-ultra-stretch-skinny-fit-jeans-401513.html?dwvar_401513_color=COL68&cgid=men-multibuy-pants-and-jeans#start=11&cgid=men-multibuy-pants-and-jeans', dealName: 'Uniqlo Ultra Skinny Jeans', image: 'https://uniqlo.scene7.com/is/image/UNIQLO/goods_68_401513?$pdp-medium$', price: 49.99, productCategory: 'Home Needs', productDescription: 'MEN ULTRA STRETCH SKINNY FIT JEANS buy 2 get $10 off.', seller: 'UNIQLO', _id: '5b3a6b943ad5b048e4c643f3'}]};
        state = favoriteReducer(state, addFavorite(favorites))
        let selectedDealItem = state.dealItems._id
        expect(selectedDealItem).toEqual(favorites._id); 
    })
})

describe('Remove Favorite', () => {
    it('Should remove a user favorite deal', () => {
        let state = {
            dealItems: [[[{commentCreatedAt: '2018-07-14T15:26:56.647Z', _id: '5b3a6b943ad5b048e4c643f3', comment: 'Perfect fit', user: '5b4392effa58974870cbd184', username: 'JohnnyRocket'}], {createdAt: '2018-07-12T16:06:46.067Z', dealLink: 'https://www.uniqlo.com/us/en/men-ultra-stretch-skinny-fit-jeans-401513.html?dwvar_401513_color=COL68&cgid=men-multibuy-pants-and-jeans#start=11&cgid=men-multibuy-pants-and-jeans', dealName: 'Uniqlo Ultra Skinny Jeans', image: 'https://uniqlo.scene7.com/is/image/UNIQLO/goods_68_401513?$pdp-medium$', price: 49.99, productCategory: 'Home Needs', productDescription: 'MEN ULTRA STRETCH SKINNY FIT JEANS buy 2 get $10 off.', seller: 'UNIQLO', _id: '5b3a6b943ad5b048e4c643f3'}, [{commentCreatedAt: '2018-07-14T15:26:56.647Z', _id: '5b2eac8e9cc1724aa388a50b', comment: 'Great laptop for the price!', user: '5b4392effa58974870cbd184', username: 'JohnnyRocket'}], {createdAt: '2018-07-12T16:06:46.067Z', dealLink: 'www.dell.com', dealName: 'Dell XPS', image: 'www.dellimage.com', price: 799.99, productCategory: 'Electronics', productDescription: 'Dell XPS', seller: 'Dell', _id: '5b2eac8e9cc1724aa388a50b'}]]
        };
        let favorites = {favorites: [[{commentCreatedAt: '2018-07-14T15:26:56.647Z', _id: '5b3a6b943ad5b048e4c643f3', comment: 'Perfect fit', user: '5b4392effa58974870cbd184', username: 'JohnnyRocket'}], {createdAt: '2018-07-12T16:06:46.067Z', dealLink: 'https://www.uniqlo.com/us/en/men-ultra-stretch-skinny-fit-jeans-401513.html?dwvar_401513_color=COL68&cgid=men-multibuy-pants-and-jeans#start=11&cgid=men-multibuy-pants-and-jeans', dealName: 'Uniqlo Ultra Skinny Jeans', image: 'https://uniqlo.scene7.com/is/image/UNIQLO/goods_68_401513?$pdp-medium$', price: 49.99, productCategory: 'Home Needs', productDescription: 'MEN ULTRA STRETCH SKINNY FIT JEANS buy 2 get $10 off.', seller: 'UNIQLO', _id: '5b3a6b943ad5b048e4c643f3'}]};
        state = favoriteReducer(state, removeFavorite(favorites))
        let selectedDealItem = state.dealItems._id
        expect(selectedDealItem).toEqual(favorites._id);
    })
})

