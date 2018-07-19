import React from 'react';
import {shallow} from 'enzyme';

import Favorites from './favorites';

describe('<Favorites />', () => {
    it('Renders without crashing', () => {
        shallow(<Favorites />);
    });
});