import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { FormService } from '../api';
import { ListItemResponseDTO } from '../gen/api/client';
import { DataList } from './DataList';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

export function FormList() {
  const [items, setItems] = useState<ListItemResponseDTO[]>([]);
  const [, setError] = useState<any | null>();

  useEffect(() => {
    FormService.listForms()
      .then((forms) => setItems(forms.items!))
      .catch((error) => setError(error));
  }, []);

  return (
    <div>
      {items.map((item: ListItemResponseDTO) => (
        <Accordion key={item.id}>
          <AccordionSummary>
            <h2>{item.name}</h2>
            <Link to={item.id}>
              <Button>
                <EditIcon />
              </Button>
            </Link>
          </AccordionSummary>
          <AccordionDetails>
            <DataList formId={item.id} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
