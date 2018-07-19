import React from 'react';
import {shallow} from 'enzyme';

import Jewlery from './jewlery';

describe('<Jewlery />', () => {
    it('Renders without crashing', () => {
        shallow(<Jewlery />);
    });
});