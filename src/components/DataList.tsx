import { Button, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataService } from '../api';
import { ListItemResponseDTO } from '../gen/api/client';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';

export function DataList(params: { formId: string }) {
  const [items, setItems] = useState<ListItemResponseDTO[]>([]);
  const [, setError] = useState<any | null>();

  useEffect(() => {
    DataService.listData({
      filterBy: { formId: params.formId },
    })
      .then((data) => setItems(data.items!))
      .catch((error) => setError(error));
  }, [params.formId]);

  return (
    <Stack direction='row'>
      <Link to={params.formId + '/data/new'}>
        <Button>
          <AddCircleIcon sx={{ fontSize: 40 }} />
        </Button>
      </Link>

      {items.map((item: ListItemResponseDTO) => (
        <Link to={params.formId + '/data/' + item.id!}>
          <Button size='large'>
            <EditIcon sx={{ fontSize: 40 }} />
          </Button>
        </Link>
      ))}
    </Stack>
  );
}
