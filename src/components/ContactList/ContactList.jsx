import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { remove } from '../../redux/sliceContact';

export const ContactList = ({ contacts, filtered }) => {
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filtered.toLowerCase())
  );

  return filteredContacts.map(cont => (
    <p key={cont.id} className={css.contactItem}>
      <span className={css.contactText}>
        {cont.name}: {cont.number}
      </span>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => {
          dispatch(remove(cont.id));
        }}
      >
        Delete
      </button>
    </p>
  ));
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filtered: PropTypes.string.isRequired,
};
