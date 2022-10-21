import { Fragment } from 'react';
import './App.css';

import { Navigation } from './navigation/Navigation';
import { DataEditor } from './dataEditor/DataEditor';
import { FormList } from './formList/FormList';

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <FormList />
      <DataEditor />
    </Fragment>
  );
};

export default App;
