import React from 'react';
import {shallow, mount} from 'enzyme';

import Amazon from './amazon';

describe('<Amazon />', () => {
    it('Renders without crashing', () => {
        shallow(<Amazon />);
    });
});
