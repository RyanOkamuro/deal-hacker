import React from 'react';
import {shallow} from 'enzyme';

import DellHeader from './dell-title';

describe('<DellHeader />', () => {
    it('Renders without crashing', () => {
        shallow(<DellHeader />);
    });
});