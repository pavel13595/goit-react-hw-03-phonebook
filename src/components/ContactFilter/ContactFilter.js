import PropTypes from 'prop-types';
import {
  InputSearch,
  TextSearch,
  Box,
  SearchIcon,
} from './ContactFilter.styled';

export const ContactFilter = ({ value, onSearch }) => (
  <Box>
    <TextSearch> Find contacts by name </TextSearch>
    <InputSearch
      type="text"
      value={value}
      onChange={onSearch}
      placeholder="Homer Simpson"
    />
    <SearchIcon size="25px" />
  </Box>
);
ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
