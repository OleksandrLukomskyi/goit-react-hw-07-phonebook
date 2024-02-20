import React, { useEffect } from 'react';
import ContactListItem from 'components/ContactListItem';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { selectVisibleContacts } from 'store/filter/thunksFilter';
import { fetchContactsThunk } from 'store/contacts/thunksContacts';
import { selectorIsLoading } from 'store/contacts/selector';

const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorIsLoading);
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}

      <ul className={css.list}>
        {visibleContacts.map(item => (
          <ContactListItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
