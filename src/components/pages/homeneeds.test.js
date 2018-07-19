import React from 'react';
import {shallow} from 'enzyme';

import HomeNeeds from './homeneeds';

describe('<HomeNeeds />', () => {
    it('Renders without crashing', () => {
        shallow(<HomeNeeds />);
    });
});