import React from 'react';
import {shallow} from 'enzyme';

import FavoriteRemoveButton from './favorite-remove-button';

describe('<FavoriteRemoveButton />', () => {
    it('Renders without crashing', () => {
        shallow(<FavoriteRemoveButton />);
    });
});