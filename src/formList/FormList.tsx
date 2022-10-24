import { useEffect, useState } from 'react';
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
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
}
