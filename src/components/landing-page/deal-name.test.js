import React from 'react';
import {shallow} from 'enzyme';

import DealName from './deal-name';

describe('<DealName />', () => {
    it('Renders without crashing', () => {
        const saleItem = {image: 'https://media.kohlsimg.com/is/image/kohls/1852576?wid=500&hei=500&op_sharpen=1', id: '5b2eac8e9cc1724aa388a50d', seller: 'Macys', dealName: 'Bulova Mens Two-Tone Stainless Steel Bracelet Watch 43mm', price: 201.45}
        shallow(<DealName saleItem={saleItem} />);
    });
});
