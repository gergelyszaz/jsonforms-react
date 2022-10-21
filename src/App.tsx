import { Fragment } from 'react';
import './App.css';

import { Navigation } from './navigation/Navigation';
import { DataEditor } from './dataEditor/DataEditor';

const App = () => {
  return (
    <Fragment>
      <Navigation />

      <DataEditor />
    </Fragment>
  );
};

export default App;
