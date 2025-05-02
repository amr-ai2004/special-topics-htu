import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactList from './components/ContactList';
import ContactFrom from './components/ContactFrom';

function App() {
  const [contacts, setContacts] = React.useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  }

  const deleteContact = (index) => {
    setContacts(contacts.slice(0,index).concat(contacts.slice(index+1)));
  }


  return (
    <div className="App">
      <h1>Contact Manager App</h1>
      <ContactFrom addContact={addContact}/>
      <ContactList contacts={contacts} deleteContact={deleteContact}/>
    </div>
  );
}

export default App;
