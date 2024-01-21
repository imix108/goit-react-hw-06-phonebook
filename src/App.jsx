import { ContactList } from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';
import { ContactForm } from './components/ContactForm/ContactForm';
import css from 'App.module.css';
import { useSelector } from 'react-redux';

export const App = () => {
  const filtered = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={contacts} filtered={filtered} />
    </div>
  );
};
