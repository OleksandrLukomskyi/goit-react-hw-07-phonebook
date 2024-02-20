import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import css from './App.module.css';
import { useSelector } from 'react-redux';
import { selectorError } from 'store/contacts/selector';

const App = () => {
  const error = useSelector(selectorError);
  return (
    <>
      <div className={css.container}>
        {error && <h1>{error}</h1>}
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

export default App;
