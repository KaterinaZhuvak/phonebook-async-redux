import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import './App.css'

function App() {


  return (
      <div style={{ maxWidth:500, margin:'40px auto', fontFamily:'sans-serif' }}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  )
}

export default App
