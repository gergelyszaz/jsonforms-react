import { useEffect, useState } from 'react';
import { FormService } from '../api';
import { ListItemResponseDTO } from '../gen/api/client';
import { DataList } from './DataList';

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
        <div>
          <h2>{item.name}</h2>
          <DataList formId={item.id} />
        </div>
      ))}
    </div>
  );
}
