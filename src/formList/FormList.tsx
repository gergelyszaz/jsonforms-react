import { useEffect, useState } from 'react';
import {
  ApiError,
  FormService,
  ListItemResponseDTO,
  OpenAPI,
} from '../gen/api/client';

OpenAPI.BASE = 'https://virtserver.swaggerhub.com/gergelyszaz/Forms/1.0.0';

const { listForms } = FormService;

const getForms = async () => {
  const forms = await listForms();
  return forms;
};

export function FormList() {
  const [items, setItems] = useState<ListItemResponseDTO[]>([]);
  const [error, setError] = useState<ApiError | null>();

  useEffect(() => {
    getForms()
      .then((forms) => setItems(forms.items!))
      .catch((error) => setError(error));
  }, []);

  return (
    <div>
      {items.map((item: ListItemResponseDTO) => (
        <li>{item.name}</li>
      ))}
    </div>
  );
}
