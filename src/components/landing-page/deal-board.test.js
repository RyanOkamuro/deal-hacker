import React from 'react';
import {shallow, mount} from 'enzyme';

import DealBoard from './deal-board';

describe('<DealBoard />', () => {
    it('Renders without crashing', () => {
        shallow(<DealBoard />);
    });
});