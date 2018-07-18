import React from 'react';
import {shallow, mount} from 'enzyme';

import DellHeader from './dell-title';

describe('<DellHeader />', () => {
    it('Renders without crashing', () => {
        shallow(<DellHeader />);
    });
});