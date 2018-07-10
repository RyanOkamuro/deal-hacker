import React from 'react';
import {shallow, mount} from 'enzyme';

import CategoriesSubmenu from './categories';

describe('<CategoriesSubmenu />', () => {
    it('Renders without crashing', () => {
        shallow(<CategoriesSubmenu />);
    });
});