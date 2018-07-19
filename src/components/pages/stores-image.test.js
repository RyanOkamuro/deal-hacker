import React from 'react';
import {shallow} from 'enzyme';

import StoresProductImage from './stores-image';

describe('<StoresProductImage />', () => {
    it('Renders without crashing', () => {
        const dealItem ={dealName: 'Dell XPS', image: 'https://johnlewis.scene7.com/is/image/JohnLewis/237128354?$rsp-pdp-main-1440$'}
        shallow(<StoresProductImage dealItem={dealItem} />);
    });
});