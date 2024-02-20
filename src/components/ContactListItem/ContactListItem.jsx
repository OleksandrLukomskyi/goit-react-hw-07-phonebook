import React from 'react';
import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'store/contacts/thunksContacts';

const ContactListItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <li key={item.id} className={css.item}>
      {item.name} - {item.phone}
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(deleteContactThunk(item.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
