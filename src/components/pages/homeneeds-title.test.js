import React from 'react';
import {shallow} from 'enzyme';

import HomeNeedsHeader from './homeneeds-title';

describe('<HomeNeedsHeader />', () => {
    it('Renders without crashing', () => {
        shallow(<HomeNeedsHeader />);
    });
});