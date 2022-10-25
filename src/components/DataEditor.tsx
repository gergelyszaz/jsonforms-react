import { useEffect, useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import {
  materialCells,
  materialRenderers,
} from '@jsonforms/material-renderers';
import {
  ApiError,
  DataResponseDTO,
  DataService,
  FormResponseDTO,
  FormService,
} from '../gen/api/client';

const initialData = { content: {} };
const { getForms } = FormService;
const { getData } = DataService;

const renderers = [
  ...materialRenderers,
  //register custom renderers
];

export const DataEditor = (params: { formId: string; dataId?: string }) => {
  const [data, setData] = useState<DataResponseDTO>(initialData);
  const [form, setForm] = useState<FormResponseDTO>();
  const [, setError] = useState<ApiError | null>();
  useEffect(() => {
    if (!params.formId) return;
    getForms(params.formId)
      .then((form) => setForm(form))
      .catch((error) => setError(error));
  }, [params.formId]);

  useEffect(() => {
    if (!params.dataId) return;
    getData(params.dataId!)
      .then((data) => setData(data.content!))
      .catch((error) => setError(error));
    getForms(data.formId!)
      .then((form) => setForm(form))
      .catch((error) => setError(error));
  }, [params.dataId]);

  return (
    <>
      <JsonForms
        schema={form?.schema}
        uischema={form?.uiSchema}
        data={data}
        renderers={renderers}
        cells={materialCells}
        onChange={({ data }) => setData(data)}
      />
    </>
  );
};
