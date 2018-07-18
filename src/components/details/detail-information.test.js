import React from 'react';
import {shallow, mount} from 'enzyme';

import DetailInformation from './detail-information';

describe('DetailInformation />', () => {
    it('Renders without crashing', () => {
        shallow(<DetailInformation />);
    });
});