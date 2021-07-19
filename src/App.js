import './App.css';
import { v4 as uuidv4 } from 'uuid';
import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import Section from "./components/Section";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";


class App extends Component {
  state = {
    contacts: [
      {id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56'},
      {id: uuidv4(), name: 'Hermione Kline', number: '443-89-12'},
      {id: uuidv4(), name: 'Eden Clements', number: '645-17-79'},
      {id: uuidv4(), name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter:''
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    const { contacts } = this.state;

    if (
        contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase(),
        )
    ) {
      alert(`${name} is already in contacts.`);
    } else if (name === '' || number === '') {
      alert("Enter the contact's name and number phone!");
    }  else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts,contact],
      }));
    }
  };
  deleteContact = (idContact)=>{
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== idContact),
    }));
  }

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getContacts();
    return (
        <>
          <Section title="Phonebook">
            <ContactForm
                onSubmit={this.addContact}
            />
          </Section>
          <Section title="Contacts">
            {contacts.length > 1 && (
                <Filter value={filter} onChange={this.changeFilter} />
            )}
            {contacts.length > 0 ? (
                <ContactList
                    list={visibleContacts}
                    deleteContact={this.deleteContact}
                />
            ) : (
                <p>Your phonebook is empty. Please add contact.</p>
            )}
          </Section>

        </>
    );
  }
}

export default App;