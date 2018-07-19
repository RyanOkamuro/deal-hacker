import React from 'react';
import {shallow} from 'enzyme';

import Electronics from './electronics';

describe('<Electronics />', () => {
    it('Renders without crashing', () => {
        shallow(<Electronics />);
    });
});