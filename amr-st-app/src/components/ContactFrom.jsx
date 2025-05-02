import React from 'react'
import ContactList from './ContactList';

function ContactFrom({addContact}) {

    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');

    function SubmitHndler(e){
        e.preventDefault();
        addContact({username:username, email:email});
        setUsername('');
        setEmail('');
    }

    return (
        <form>
            <input type="text" name="username" id="username" value={username}
            onChange={(e)=>{setUsername(e.target.value)}} placeholder='Name'/>
            <input type="text" name="email" id="email" value={email}
            onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
            <button type='submit' onClick={SubmitHndler}>Add Contact</button>
        </form>
    )
}

export default ContactFrom;