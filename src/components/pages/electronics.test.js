import React from 'react';
import {shallow, mount} from 'enzyme';

import Electronics from './electronics';

describe('<Electronics />', () => {
    it('Renders without crashing', () => {
        shallow(<Electronics />);
    });
});