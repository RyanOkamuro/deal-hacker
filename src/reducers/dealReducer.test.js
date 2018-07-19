import {getDeals} from '../actions/dealActions';
import {dealReducer} from './dealReducer';

describe('Get Deals', () => {
    it('Should get all deals', () => {
        let state = {
            allDeals: []
        };
        let deals = [[{commentCreatedAt: '2018-07-14T15:26:56.647Z', _id: '5b3a6b943ad5b048e4c643f3', comment: 'Perfect fit', user: '5b4392effa58974870cbd184', username: 'JohnnyRocket'}], {createdAt: '2018-07-12T16:06:46.067Z', dealLink: 'https://www.uniqlo.com/us/en/men-ultra-stretch-skinny-fit-jeans-401513.html?dwvar_401513_color=COL68&cgid=men-multibuy-pants-and-jeans#start=11&cgid=men-multibuy-pants-and-jeans', dealName: 'Uniqlo Ultra Skinny Jeans', image: 'https://uniqlo.scene7.com/is/image/UNIQLO/goods_68_401513?$pdp-medium$', price: 49.99, productCategory: 'Home Needs', productDescription: 'MEN ULTRA STRETCH SKINNY FIT JEANS buy 2 get $10 off.', seller: 'UNIQLO', _id: '5b3a6b943ad5b048e4c643f3'}];
        state = dealReducer(state, getDeals(deals))
        expect(state).toEqual({
            allDeals: deals.deals
        })
    });
})