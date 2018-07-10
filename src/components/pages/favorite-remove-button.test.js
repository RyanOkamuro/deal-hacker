import React from 'react';
import {shallow, mount} from 'enzyme';

import FavoriteRemoveButton from './favorite-remove-button';

describe('<FavoriteRemoveButton />', () => {
    it('Renders without crashing', () => {
        shallow(<FavoriteRemoveButton />);
    });
});