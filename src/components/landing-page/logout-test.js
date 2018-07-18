import React from 'react';
import {shallow, mount} from 'enzyme';

import LogOut from './logout';

describe('<LogOut />', () => {
    it('Renders without crashing', () => {
        shallow(<LogOut />);
    });
});