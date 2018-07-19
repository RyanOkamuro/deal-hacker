import React from 'react';
import {shallow} from 'enzyme';

import LogOut from './logout';

describe('<LogOut />', () => {
    it('Renders without crashing', () => {
        shallow(<LogOut />);
    });
});