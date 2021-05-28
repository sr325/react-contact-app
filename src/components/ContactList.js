import React from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom'

const ContactList = (props) => {
    // console.log(props)
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

    const data = props.contacts.split(",");
    console.log(data)

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard
                contact={contact}
                clickHander={deleteContactHandler}
                key={contact.id}
            />
        );
    });

    return (
        <div className="main">
            <br />
            <br />
            <br />
            <h2>Contact list
            <br />
                <Link to="/add">
                    <button className="ui button blue right">Add Contact</button>
                </Link>
            </h2>

            <div className="ui celled list">
                {renderContactList}
            </div>
        </div>
    )
}

export default ContactList
