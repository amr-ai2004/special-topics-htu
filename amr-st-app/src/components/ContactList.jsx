import React from 'react'
import ContactItem from './ContactItem';

function ContactList({contacts, deleteContact}) {

  return (
    <>
      <h2>Contacts:</h2>
      {contacts.length===0? (<p>No contacts yet.</p>):(
        <ol>
      {contacts.map((item,index)=>{
        return <li key={index}><ContactItem item={item} index={index} deleteContact={deleteContact}/></li>
      })}
      </ol>)}
    </>
  )
}

export default ContactList;