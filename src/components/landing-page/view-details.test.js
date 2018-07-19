import React from 'react';
import {shallow} from 'enzyme';

import ViewDetails from './view-details';

describe('<ViewDetails />', () => {
    it('Renders without crashing', () => {
        const saleItem = {id: '5b397dafa2ef6e07d444f6c9'}
        shallow(<ViewDetails saleItem={saleItem}/>);
    });
});