import React from 'react';

import Header from './header';
import DealBoard from './deal-board';

export default class Sales extends React.Component {
  render() {
      return (
        <div>
          <Header />
            <main role="main">
              <DealBoard />
            </main>
        </div>
      );
  }
}