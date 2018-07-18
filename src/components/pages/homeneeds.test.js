import React from 'react';
import {shallow, mount} from 'enzyme';

import HomeNeeds from './homeneeds';

describe('<HomeNeeds />', () => {
    it('Renders without crashing', () => {
        shallow(<HomeNeeds />);
    });
});