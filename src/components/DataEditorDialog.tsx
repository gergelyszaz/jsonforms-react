import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import DataEditor from './DataEditor';
import { DataService } from '../api';
import { useState } from 'react';
import { CreatedResponseDTO, DataRequestDTO } from '../gen/api/client';

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
    let data: DataRequestDTO = { formId: '', content: {} };
    if (dataId) {
      updateData(dataId, data);
    } else {
      createData(data);
    }
  }

  function createData(data: DataRequestDTO) {
    DataService.createData({ dataRequestDTO: data })
      .then((createdResponse: CreatedResponseDTO) =>
        navigate('../' + createdResponse.id)
      )
      .catch((error) => setError(error));
  }

  function updateData(id: string, data: DataRequestDTO) {
    DataService.updateData({
      id: id,
      dataRequestDTO: data,
    })
      .then()
      .catch((error) => setError(error));
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
