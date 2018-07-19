import React from 'react';
import {shallow} from 'enzyme';

import AmazonHeader from './amazon-title';

describe('<AmazonHeader />', () => {
    it('Renders without crashing', () => {
        shallow(<AmazonHeader />);
    });
});