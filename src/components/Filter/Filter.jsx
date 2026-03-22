import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contactSlice';
import styles from './Filter.module.css';

const  Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(s => s.contacts.filter);

  return (
    <input
      className={styles.input}
      placeholder="Search contact"
      value={filter}
      onChange={e => dispatch(changeFilter(e.target.value))}
    />
  );
}
export default Filter