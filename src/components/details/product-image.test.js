import React from 'react';
import {shallow} from 'enzyme';

import ProductImage from './product-image';

describe('ProductImage />', () => {
    const allSalesItems = {dealName: 'Fire Stick', image: 'https://images-na.ssl-images-amazon.com/images/I/51D8NXwQfvL._SY355_.jpg'}
    it('Renders without crashing', () => {
        shallow(<ProductImage allSalesItems={allSalesItems} />);
    });
});


