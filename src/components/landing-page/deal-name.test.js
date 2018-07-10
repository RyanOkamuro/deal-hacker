import React from 'react';
import {shallow, mount} from 'enzyme';

import DealName from './deal-name';

describe('<DealName />', () => {
    it('Renders without crashing', () => {
        shallow(<DealName />);
    });
});
