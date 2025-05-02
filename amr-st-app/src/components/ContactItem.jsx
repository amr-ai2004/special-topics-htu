import React from 'react'

function ContactItem({item, index, deleteContact}) {
  return (
    <div>
      <strong>{item.username}</strong> - {item.email} <button onClick={()=>deleteContact(index)}>Delete</button>
    </div>
  )
}

export default ContactItem;