import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { contactReducer } from './contacts/sliceContacts';
import { filterReducer } from './filter/sliceFilter';

const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

export const store = configureStore({ reducer });
