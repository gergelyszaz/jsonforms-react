import { Button, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiError, FormService, ListItemResponseDTO } from '../gen/api/client';

const { listForms } = FormService;

export function FormList() {
  const [items, setItems] = useState<ListItemResponseDTO[]>([]);
  const [, setError] = useState<ApiError | null>();

  useEffect(() => {
    listForms()
      .then((forms) => setItems(forms.items!))
      .catch((error) => setError(error));
  }, []);

  return (
    <div>
      {items.map((item: ListItemResponseDTO) => (
        <div>
          <h2>{item.name}</h2>
          <Stack direction='row' spacing={2}>
            <Link to={item.id!}>
              <Button>Add</Button>
            </Link>
          </Stack>
        </div>
      ))}
    </div>
  );
}
