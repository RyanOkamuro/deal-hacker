import React from 'react';
import {shallow} from 'enzyme';

import DealItem from './deal-item';

describe('<DealItem />', () => {
    const saleItems = [{id: '5b397dafa2ef6e07d444f6c9', dealName: 'Insignia 2.6 Cu. Ft. Mini Fridge'}]
    it('Renders without crashing', () => {
        shallow(<DealItem saleItems = {saleItems} />);
    });
});