import React from 'react';
import {shallow, mount} from 'enzyme';

import StoresSubmenu from './stores';

describe('<StoresSubmenu />', () => {
    it('Renders without crashing', () => {
        shallow(<StoresSubmenu />);
    });
});