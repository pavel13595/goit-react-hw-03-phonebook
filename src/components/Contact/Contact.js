import PropTypes from 'prop-types';
import { ContactName, Name, DeleteButton, DeleteIcon } from './Contact.styled';
export const Contact = ({ id, name, number, onDelete }) => {
  return (
    <ContactName>
      <Name>
        {name}: {number}
      </Name>
      <DeleteButton onClick={() => onDelete(id)} type="button">
        <DeleteIcon size="25px" />
      </DeleteButton>
    </ContactName>
  );
};
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
