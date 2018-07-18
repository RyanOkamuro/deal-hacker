import React from 'react';
import {shallow, mount} from 'enzyme';

import FavoriteStar from './favorite-star';

describe('<FavoriteStar />', () => {
    it('Renders without crashing', () => {
        shallow(<FavoriteStar />);
    });
});
