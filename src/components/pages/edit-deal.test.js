import React from 'react';
import {shallow} from 'enzyme';

import EditDeal from './edit-deal';

describe('<EditDeal />', () => {
    it('Renders without crashing', () => {
        shallow(<EditDeal />);
    });
});
