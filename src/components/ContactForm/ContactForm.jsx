import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsOperations';
import { selectContacts } from '../../redux/contactSelectors';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';



import styles from "./ContactForm.module.css"

const ContactForm = () => {
  const notyf = new Notyf();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const exists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

   if (exists) {
  notyf.error('Contact already exists');
  return;
}

    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
  <form className={styles.form} onSubmit={handleSubmit}>
    <input
      className={styles.input}
      name="name"
      value={name}
      onChange={e => setName(e.target.value)}
      placeholder="Name"
      required
    />

    <input
      className={styles.input}
      name="number"
      value={number}
      onChange={e => setNumber(e.target.value)}
      placeholder="Phone number"
      required
    />

    <button className={styles.button} type="submit">
      Add contact
    </button>
  </form>
);
};

export default ContactForm;