import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

import './reset.css';
import './index.css';

import Sales from './components/sales';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Sales />
    </div>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
