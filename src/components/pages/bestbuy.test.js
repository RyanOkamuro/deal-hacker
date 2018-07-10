import React from 'react';
import {shallow, mount} from 'enzyme';

import BestBuy from './bestbuy';

describe('<BestBuy />', () => {
    it('Renders without crashing', () => {
        shallow(<BestBuy />);
    });
});