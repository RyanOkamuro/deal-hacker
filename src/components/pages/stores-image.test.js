import React from 'react';
import {shallow, mount} from 'enzyme';

import StoresProductImage from './stores-image';

describe('<StoresProductImage />', () => {
    it('Renders without crashing', () => {
        shallow(<StoresProductImage />);
    });
});