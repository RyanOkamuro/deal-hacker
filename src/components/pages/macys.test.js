import React from 'react';
import {shallow} from 'enzyme';

import Macys from './macys';

describe('<Macys />', () => {
    it('Renders without crashing', () => {
        shallow(<Macys />);
    });
});