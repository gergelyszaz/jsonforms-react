import { Fragment } from 'react';
import './App.css';

import { Navigation } from './navigation/Navigation';
import { DataEditor } from './dataEditor/DataEditor';
import { FormList } from './formList/FormList';
import { OpenAPI } from './gen/api/client';

OpenAPI.BASE = 'https://virtserver.swaggerhub.com/gergelyszaz/Forms/1.0.0';

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <FormList />
      <DataEditor formId='3fa85f64-5717-4562-b3fc-2c963f66afa' />
    </Fragment>
  );
};

export default App;
