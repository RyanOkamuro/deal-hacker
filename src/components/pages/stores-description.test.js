import React from 'react';
import {shallow, mount} from 'enzyme';

import StoresProductDescription from './stores-description';

describe('<StoresProductDescription />', () => {
    it('Renders without crashing', () => {
        shallow(<StoresProductDescription />);
    });
});