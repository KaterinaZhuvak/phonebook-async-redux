import { useSelector, useDispatch } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOperations';

const ContactList = () => {
  const dispatch = useDispatch(); // ✅ ТУТ

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { items, filter } = useSelector(s => s.contacts);

  const filtered = items.filter(c =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {filtered.map(c => (
        <ContactItem key={c.id} contact={c} />
      ))}
    </ul>
  );
};

export default ContactList;