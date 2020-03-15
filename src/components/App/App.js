import React from 'react';
import './App.scss';
import { data } from '../../data';
import FullTable from '../FullTable'

const App = () => {
  return (
    <div className="wrapper">
      <div className="app">
        <FullTable data={data} />
      </div>
    </div>
  );
}

export default App;
