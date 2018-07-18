import React from 'react';
import {shallow, mount} from 'enzyme';

import Menu from './menu';

describe('<Menu />', () => {
    it('Renders without crashing', () => {
        shallow(<Menu />);
    });
});