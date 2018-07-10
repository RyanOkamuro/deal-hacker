import React from 'react';
import {shallow, mount} from 'enzyme';

import FavoriteProductDescription from './favorites-description';

describe('<FavoriteProductDescription />', () => {
    it('Renders without crashing', () => {
        shallow(<FavoriteProductDescription />);
    });
});