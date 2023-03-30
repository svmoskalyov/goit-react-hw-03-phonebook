import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Title } from './Section.styled';

export const Section = ({ title, children = [] }) => {
  return (
    <Box as="section" mb={5}>
      <Title>{title}</Title>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
