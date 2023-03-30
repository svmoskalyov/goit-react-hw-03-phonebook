import PropTypes from 'prop-types';
import { ImUserMinus } from 'react-icons/im';
import { List, Item } from './ContactList.styled';
import { Button } from 'components/Button/Button';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <Button
            icon={ImUserMinus}
            onClick={() => onDeleteContact(id)}
            aria-label="Delete contact"
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
