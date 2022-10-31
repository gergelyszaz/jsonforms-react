import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import DataEditor from './DataEditor';
import { DataService } from '../api';
import { useState } from 'react';
import { CreatedResponseDTO } from '../gen/api/client';

export default function DataEditorDialog(params: {
  formId: string | undefined;
  dataId: string | undefined;
}) {
  const [, setError] = useState<any | null>();
  let formId = params.formId;
  let dataId = params.dataId;

  const navigate = useNavigate();

  function handleCancel() {
    navigate('/forms');
  }
  function handleSave() {
    DataService.createData()
      .then(
        (createdResponse: CreatedResponseDTO) => (dataId = createdResponse.id)
      )
      .catch((error) => setError(error));

    navigate('/forms');
  }

  return (
    <Dialog open>
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
