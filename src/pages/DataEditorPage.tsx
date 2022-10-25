import { useLoaderData, useNavigation, useParams } from 'react-router-dom';
import { DataEditor } from '../components/DataEditor';

export function DataEditorPage() {
  let { id } = useParams<'id'>();
  return (
    <>
      <h2>Data Editor</h2>
      <DataEditor formId={id!} />
    </>
  );
}
