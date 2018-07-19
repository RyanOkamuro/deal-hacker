import React from 'react';
import {shallow} from 'enzyme';

import Dell from './dell';

describe('<Dell />', () => {
    it('Renders without crashing', () => {
        shallow(<Dell />);
    });
});