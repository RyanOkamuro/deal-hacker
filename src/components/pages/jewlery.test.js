import React from 'react';
import {shallow, mount} from 'enzyme';

import Jewlery from './jewlery';

describe('<Jewlery />', () => {
    it('Renders without crashing', () => {
        shallow(<Jewlery />);
    });
});