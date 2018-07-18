import React from 'react';
import {shallow, mount} from 'enzyme';

import ProductDescription from './product-description';

describe('ProductDescription />', () => {
    it('Renders without crashing', () => {
        shallow(<ProductDescription />);
    });
});