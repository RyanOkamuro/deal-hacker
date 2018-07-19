import React from 'react';
import {shallow} from 'enzyme';

import Amazon from './amazon';

describe('<Amazon />', () => {
    it('Renders without crashing', () => {
        shallow(<Amazon />);
    });
});
