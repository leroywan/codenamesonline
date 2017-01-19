import React from 'react';
import Header from '../components/Header.jsx';

import Instructions from '../components/Instructions.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Instructions />
      </div>
    );
  }
}