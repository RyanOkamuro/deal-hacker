import React from 'react';
import {shallow} from 'enzyme';

import CategoriesSubmenu from './categories';

describe('<CategoriesSubmenu />', () => {
    it('Renders without crashing', () => {
        shallow(<CategoriesSubmenu />);
    });
});