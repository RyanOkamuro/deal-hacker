import React from 'react';

import Header from './header';
import DealBoard from './deal-board';

export default function Sales(props) {
  return (
    <div>
      <Header />
      <main role="main">
        <DealBoard />
      </main>
    </div>
  );
}
