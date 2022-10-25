import { useParams } from 'react-router-dom';
import { DataEditor } from '../components/DataEditor';

export function DataEditorPage() {
  let { formId } = useParams<'formId'>();
  let { dataId } = useParams<'dataId'>();
  return (
    <>
      <h2>Data Editor</h2>
      <DataEditor formId={formId!} dataId={dataId} />
    </>
  );
}
