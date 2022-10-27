import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataService } from '../api';
import { ListItemResponseDTO } from '../gen/api/client';

export function DataList(params: { formId: string }) {
  const [items, setItems] = useState<ListItemResponseDTO[]>([]);
  const [error, setError] = useState<any | null>();

  useEffect(() => {
    DataService.listData({
      filterBy: { formId: params.formId },
    })
      .then((data) => setItems(data.items!))
      .catch((error) => setError(error));
  }, [params.formId]);

  return (
    <div>
      <Link to={params.formId}>
        <Button>Add</Button>
      </Link>
      {items.map((item: ListItemResponseDTO) => (
        <div>
          <Link to={'data/' + item.id!}>
            <Button>Open</Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
