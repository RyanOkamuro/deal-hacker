import React from 'react';
import {shallow, mount} from 'enzyme';

import ElectronicsHeader from './electronics-title';

describe('<ElectronicsHeader />', () => {
    it('Renders without crashing', () => {
        shallow(<ElectronicsHeader />);
    });
});