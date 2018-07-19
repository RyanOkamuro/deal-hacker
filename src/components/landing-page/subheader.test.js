import React from 'react';
import {shallow} from 'enzyme';

import Subheader from './subheader';

describe('<Subheader />', () => {
    it('Renders without crashing', () => {
        shallow(<Subheader />);
    });
});