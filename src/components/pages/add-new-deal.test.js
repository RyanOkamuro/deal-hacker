import React from 'react';
import {shallow, mount} from 'enzyme';

import AddNewDealForm from './add-new-deal';

describe('<AddNewDealForm />', () => {
    it('Renders without crashing', () => {
        shallow(<AddNewDealForm />);
    });
});
