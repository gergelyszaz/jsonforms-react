import { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import schema from './../tmp/schema.json';
import uischema from './../tmp/uischema.json';
import {
  materialCells,
  materialRenderers,
} from '@jsonforms/material-renderers';

const initialData = {};

const renderers = [
  ...materialRenderers,
  //register custom renderers
];

export const DataEditor = () => {
  const [data, setData] = useState<any>(initialData);

  return (
    <JsonForms
      schema={schema}
      uischema={uischema}
      data={data}
      renderers={renderers}
      cells={materialCells}
      onChange={({ errors, data }) => setData(data)}
    />
  );
};
