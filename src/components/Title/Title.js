import PropTypes from 'prop-types';
import { TitleSection } from './Title.styled';

export const Title = ({ title }) => <TitleSection>{title}</TitleSection>;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
