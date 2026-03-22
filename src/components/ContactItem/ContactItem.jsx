import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOperations';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <span>{contact.name}: {contact.number}</span>
      <button
        className={styles.button}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
}
export default ContactItem