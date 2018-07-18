import React from 'react';
import {shallow, mount} from 'enzyme';

import Walmart from './walmart';

describe('<Walmart />', () => {
    it('Renders without crashing', () => {
        shallow(<Walmart />);
    });
});