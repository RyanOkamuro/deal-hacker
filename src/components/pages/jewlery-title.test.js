import React from 'react';
import {shallow, mount} from 'enzyme';

import JewleryHeader from './jewlery-title';

describe('<JewleryHeader />', () => {
    it('Renders without crashing', () => {
        shallow(<JewleryHeader />);
    });
});