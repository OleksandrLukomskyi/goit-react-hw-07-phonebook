import { api } from './api';

export const fetchContactsApi = async () => {
  const { data } = await api(`contacts`);

  return data;
};

export const addContactApi = async newContact => {
  console.log('Отправка Post запроса на бекенд', newContact);
  try {
    const { data } = await api.post(`contacts`, newContact);

    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteContactApi = async id => {
  const { data } = await api.delete(`contacts/${id}`);

  return data;
};
