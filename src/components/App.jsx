import { Component } from 'react';

import { ContactsList } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // метод добавления контакта - из компонента ContactForm возвращает submit формы ввиде объекта newContact
  addContact = newContact => {
    this.setState(prevState => {
      // через метод some() проверяем, есть ли в массиве такое имя -> возвращает true/false
      let existWord = prevState.contacts.some(
        object => object.name === newContact.name
      );

      if (existWord) {
        alert(`${newContact.name} is already in contacts.`);
        return;
      }
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== id),
      };
    });
  };

  addFilter = value => {
    this.setState(prevState => {
      return {
        filter: value,
      };
    });
  };

  render() {
    const filteredList = this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter addFilter={this.addFilter} />
        <ContactsList list={filteredList} deleteContact={this.deleteContact} />
      </div>
    );
  }
}
