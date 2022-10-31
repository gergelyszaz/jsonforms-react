import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import { DataEditor } from './DataEditor';
import { DataService } from '../api';
import { useState } from 'react';
import { CreatedResponseDTO } from '../gen/api/client';

export default function FormEditorDialog(params: {
  formId: string | undefined;
}) {
  const [, setError] = useState<any | null>();
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
        <DataEditor formId={formId!} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
