import React from 'react';
import {shallow} from 'enzyme';

import StoresSubmenu from './stores';

describe('<StoresSubmenu />', () => {
    it('Renders without crashing', () => {
        shallow(<StoresSubmenu />);
    });
});