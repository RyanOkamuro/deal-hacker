import React from 'react';
import {shallow, mount} from 'enzyme';

import MacysHeader from './macys-title';

describe('<MacysHeader />', () => {
    it('Renders without crashing', () => {
        shallow(<MacysHeader />);
    });
});