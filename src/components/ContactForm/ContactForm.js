import { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  AddButton,
  TextLabel,
  FormIconPeople,
  FormIconPhone,
  FormInput,
  Form,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  formChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  formSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    const { formSubmit, formChange } = this;
    return (
      <Form onSubmit={formSubmit} autoComplete="off">
        <TextLabel>
          Name <FormIconPeople size="20px" />
        </TextLabel>

        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={formChange}
          id={nanoid()}
          required
          placeholder="Homer Simpson"
        />
        <TextLabel>
          Phone <FormIconPhone size="20px" />
        </TextLabel>

        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={formChange}
          id={nanoid()}
          required
          placeholder="999-99-99"
        />

        <AddButton type="submit">Add contact</AddButton>
      </Form>
    );
  }
}
