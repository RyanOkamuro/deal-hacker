import React from 'react';
import {shallow} from 'enzyme';

import FavoriteProductImage from './favorites-image';

describe('<FavoriteProductImage />', () => {
    it('Renders without crashing', () => {
        const favoriteItemDetail = {dealName: 'Fire Stick', image: 'https://images-na.ssl-images-amazon.com/images/I/51D8NXwQfvL._SY355_.jpg'}
        shallow(<FavoriteProductImage favoriteItemDetail={favoriteItemDetail} />);
    });
});