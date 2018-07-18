import React from 'react';
import {shallow, mount} from 'enzyme';

import BestBuyHeader from './bestbuy-title';

describe('<BestBuyHeader />', () => {
    it('Renders without crashing', () => {
        shallow(<BestBuyHeader />);
    });
});