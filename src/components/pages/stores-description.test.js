import React from 'react';
import {shallow} from 'enzyme';

import StoresProductDescription from './stores-description';

describe('<StoresProductDescription />', () => {
    it('Renders without crashing', () => {
        const dealItem = {price: 70, dealLink: 'https://www.bestbuy.com/site/insignia-2-6-cu-ft-mini-fridge-white/6145103.p?ref=8575135&loc=ebd9d5c67d9511e8b7f2fae05afd5f940INT&acampID=ebd9d5c67d9511e8b7f2fae05afd5f940INT', productDescription: 'Insignia 2.6 Cu. Ft. Mini Fridge'}
        shallow(<StoresProductDescription dealItem={dealItem} />);
    });
});