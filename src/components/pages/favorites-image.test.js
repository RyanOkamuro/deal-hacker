import React from 'react';
import {shallow, mount} from 'enzyme';

import FavoriteProductImage from './favorites-image';

describe('<FavoriteProductImage />', () => {
    it('Renders without crashing', () => {
        shallow(<FavoriteProductImage />);
    });
});