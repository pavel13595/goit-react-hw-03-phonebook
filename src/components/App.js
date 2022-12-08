import React from 'react';
import { Container } from 'GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Title } from './Title/Title';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class App extends React.Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? Notify.failure(`${name} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
    Notify.success(`${name}: ${number} added to contacts.`, {
      ID: 'MKA',
      timeout: 1923,
      showOnlyTheLastOne: true,
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = id => {
    Notify.info(` Removed to contacts.`);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  };
  render() {
    const { filter } = this.state;
    const { addContact, changeFilter, filterContacts, deleteContact } = this;
    return (
      <Container>
        <Title title="Phonebook" />
        <ContactForm addContact={addContact} />
        <Title title="Contact" />
        <ContactFilter value={filter} onSearch={changeFilter} />
        <ContactList contacts={filterContacts()} onDelete={deleteContact} />
      </Container>
    );
  }
}
