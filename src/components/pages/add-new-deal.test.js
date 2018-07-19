import React from 'react';
import {shallow} from 'enzyme';

import AddNewDealForm from './add-new-deal';

describe('<AddNewDealForm />', () => {
    it('Renders without crashing', () => {
        shallow(<AddNewDealForm />);
    });
});
