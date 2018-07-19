import React from 'react';
import {shallow} from 'enzyme';

import BestBuy from './bestbuy';

describe('<BestBuy />', () => {
    it('Renders without crashing', () => {
        shallow(<BestBuy />);
    });
});