import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';

import { nanoid } from '@reduxjs/toolkit';
import { addContactPostThunk } from 'store/contacts/thunksContacts';
import { selectorContacts } from 'store/contacts/selector';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const items = useSelector(selectorContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setPhone(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isExist = items.some(
      item => item.name === name.trim() || item.phone === phone.trim()
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      phone: phone.trim(),
    };

    dispatch(addContactPostThunk(newContact));

    setPhone('');
    setName('');

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.formBloc}>
      <label className={css.inputBloc}>
        Name
        <input
          type="text"
          name="name"
          placeholder="Rosie Simpson"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </label>
      <label className={css.inputBloc}>
        Numer
        <input
          type="tel"
          name="phone"
          placeholder="459-12-56"
          value={phone}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
        />
      </label>

      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
