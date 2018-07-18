import React from 'react';
import {shallow, mount} from 'enzyme';

import Macys from './macys';

describe('<Macys />', () => {
    it('Renders without crashing', () => {
        shallow(<Macys />);
    });
});