import { useEffect, useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import {
  materialCells,
  materialRenderers,
} from '@jsonforms/material-renderers';
import { ApiError, FormResponseDTO, FormService } from '../gen/api/client';

const initialData = {};

const renderers = [
  ...materialRenderers,
  //register custom renderers
];

export const DataEditor = (params: { formId: string, dataId?: string }) => {
  const [data, setData] = useState<any>(initialData);
  const [form, setForm] = useState<FormResponseDTO>();
  const [, setError] = useState<ApiError | null>();
  useEffect(() => {
    FormService.getForms(params.formId)
      .then((form) => setForm(form))
      .catch((error) => setError(error));
  });

  return (
    <JsonForms
      schema={form?.schema}
      uischema={form?.uiSchema}
      data={data}
      renderers={renderers}
      cells={materialCells}
      onChange={({ data }) => setData(data)}
    />
  );
};
