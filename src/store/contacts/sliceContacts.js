import { createSlice } from '@reduxjs/toolkit';
import {
  addContactPostThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './thunksContacts';

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleRejected = (state, action) => {
  if (action.payload && action.payload.message) {
    state.error = action.payload.message;
  } else {
    state.error = 'An error occurred';
  }
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
};

const sliceContacts = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContactPostThunk.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload);
      })
      .addMatcher(actions => actions.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

export const contactReducer = sliceContacts.reducer;
