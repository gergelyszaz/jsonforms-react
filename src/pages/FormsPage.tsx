import { useParams } from 'react-router-dom';
import DataEditorDialog from '../components/DataEditorDialog';
import FormEditorDialog from '../components/FormEditorDialog';
import { FormList } from '../components/FormList';

interface FormsPageProp {
  showFormEditor?: boolean;
  showDataEditor?: boolean;
}

export default function FormsPage({
  showFormEditor = false,
  showDataEditor = false,
}: FormsPageProp) {
  let { formId } = useParams<'formId'>();
  let { dataId } = useParams<'dataId'>();
  return (
    <>
      <h1>Forms</h1>
      <FormList />
      {showFormEditor && <FormEditorDialog formId={formId} />}
      {showDataEditor && <DataEditorDialog formId={formId} dataId={dataId} />}
    </>
  );
}
