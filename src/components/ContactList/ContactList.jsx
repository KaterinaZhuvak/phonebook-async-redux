import { useSelector, useDispatch } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOperations';
import { selectFilteredContacts } from '../../redux/contactSelectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={styles.list}>
      {contacts.map(c => (
        <ContactItem key={c.id} contact={c} />
      ))}
    </ul>
  );
};

export default ContactList;