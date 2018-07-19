import React from 'react';
import {shallow} from 'enzyme';

import Error from './error';

describe('<Error />', () => {
    it('Renders without crashing', () => {
        shallow(<Error />);
    });
});
