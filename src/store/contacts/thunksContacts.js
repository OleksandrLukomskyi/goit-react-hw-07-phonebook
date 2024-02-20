import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactApi,
  deleteContactApi,
  fetchContactsApi,
} from 'api/contacts';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',

  async (_, { rejectWithValue }) => {
    try {
      return await fetchContactsApi();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContactApi(id);

      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const addContactPostThunk = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const addedContact = await addContactApi(newContact);
      return addedContact;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
