import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import FormEditor from './FormEditor';

export default function FormEditorDialog(params: {
  formId: string | undefined;
}) {
  let formId = params.formId;

  const navigate = useNavigate();

  function handleCancel() {
    navigate('/forms');
  }
  function handleSave() {
    navigate('/forms');
  }

  return (
    <Dialog open>
      <DialogTitle>Edit data</DialogTitle>
      <DialogContent>
        <FormEditor formId={formId!} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
