import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate, useParams } from 'react-router-dom';
import { DataEditor } from './DataEditor';
import { DataService } from '../api';

export default function DataEditorDialog() {
  let { formId } = useParams<'formId'>();
  let { dataId } = useParams<'dataId'>();
  let open = formId !== undefined || dataId !== undefined;
  const navigate = useNavigate();

  function handleCancel() {
    navigate('/forms');
  }
  function handleSave() {
    DataService.createData();
    navigate('/forms');
  }
  return (
    <Dialog open={open}>
      <DialogTitle>Edit data</DialogTitle>
      <DialogContent>
        <DataEditor formId={formId!} dataId={dataId} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
