import React from 'react';
import {shallow, mount} from 'enzyme';

import DealItem from './deal-item';

describe('<DealItem />', () => {
    it('Renders without crashing', () => {
        shallow(<DealItem />);
    });
});

