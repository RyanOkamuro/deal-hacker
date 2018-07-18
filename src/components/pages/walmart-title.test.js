import React from 'react';
import {shallow, mount} from 'enzyme';

import WalmartHeader from './walmart-title';

describe('<WalmartHeader />', () => {
    it('Renders without crashing', () => {
        shallow(<WalmartHeader />);
    });
});