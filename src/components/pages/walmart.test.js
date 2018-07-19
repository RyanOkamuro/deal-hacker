import React from 'react';
import {shallow} from 'enzyme';
import Walmart from './walmart';

describe('<Walmart />', () => {
    it('Renders without crashing', () => {
        shallow(<Walmart />);
    });
});