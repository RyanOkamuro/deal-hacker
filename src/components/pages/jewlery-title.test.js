import React from 'react';
import {shallow} from 'enzyme';

import JewleryHeader from './jewlery-title';

describe('<JewleryHeader />', () => {
    it('Renders without crashing', () => {
        shallow(<JewleryHeader />);
    });
});