import { useEffect, useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import {
  materialCells,
  materialRenderers,
} from '@jsonforms/material-renderers';
import { DataResponseDTO, FormResponseDTO } from '../gen/api/client';
import { DataService, FormService } from '../api';
import { JsonSchema, UISchemaElement } from '@jsonforms/core';

const renderers = [
  ...materialRenderers,
  //register custom renderers
];

export const DataEditor = (params: { formId: string; dataId?: string }) => {
  const [data, setData] = useState<DataResponseDTO>();
  const [form, setForm] = useState<FormResponseDTO>();
  const [error, setError] = useState<any | null>();
  useEffect(() => {
    if (!params.formId) return;
    FormService.getForm({ id: params.formId })
      .then((form: any) => setForm(form))
      .catch((error) => setError(error));
  }, [params.formId]);

  useEffect(() => {
    if (!params.dataId) return;
    DataService.getData({ id: params.dataId! })
      .then((data) => setData(data))
      .catch((error) => setError(error));
    FormService.getForm({ id: data?.formId! })
      .then((form) => setForm(form))
      .catch((error) => setError(error));
  }, [params.dataId]);

  return (
    <>
      <JsonForms
        schema={form?.schema as JsonSchema}
        uischema={form?.uiSchema as UISchemaElement}
        data={data ? data : {}}
        renderers={renderers}
        cells={materialCells}
        onChange={({ data }) => setData(data)}
      />
    </>
  );
};
