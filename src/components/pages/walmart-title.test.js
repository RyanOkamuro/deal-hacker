import React from 'react';
import {shallow} from 'enzyme';
import WalmartHeader from './walmart-title';

describe('<WalmartHeader />', () => {
    it('Renders without crashing', () => {
        shallow(<WalmartHeader />);
    });
});