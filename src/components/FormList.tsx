import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { FormService } from '../api';
import { ListItemResponseDTO } from '../gen/api/client';
import DataEditorDialog from './DataEditorModal';
import { DataList } from './DataList';
import EditIcon from '@mui/icons-material/Edit';

export function FormList() {
  const [items, setItems] = useState<ListItemResponseDTO[]>([]);
  const [, setError] = useState<any | null>();

  function handleEdit(e: { stopPropagation: () => void }) {
    e.stopPropagation();
  }

  useEffect(() => {
    FormService.listForms()
      .then((forms) => setItems(forms.items!))
      .catch((error) => setError(error));
  }, []);

  return (
    <div>
      {items.map((item: ListItemResponseDTO) => (
        <Accordion>
          <AccordionSummary>
            <h2>{item.name}</h2>
            <Button onClick={handleEdit}>
              <EditIcon />
            </Button>
          </AccordionSummary>
          <AccordionDetails>
            <DataList formId={item.id} />
          </AccordionDetails>
        </Accordion>
      ))}
      <DataEditorDialog />
    </div>
  );
}
