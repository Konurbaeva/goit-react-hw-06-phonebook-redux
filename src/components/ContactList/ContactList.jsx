import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/contacts-selector'

const Button = styled.button`
  font-size: 0.5em;
  margin: 1em;
  padding: 0.25em 1em;
  padding: 0.5em;
  color: ${props => props.theme.colors.primary};
  border: ${props => props.theme.colors.primary} palevioletred;
  border-radius: 3px;
`;

export function ContactList({ contacts, deleteContact }) {
  // const value = useSelector(state => state.contacts);
  const contactsSelector = useSelector(getFilteredContacts)
 // const dispatch = useDispatch();

  console.log('contactsSelector: ', contactsSelector);

  return contactsSelector.map(({ name, number, id }) => {
    return (
      <ul key={id}>
        <li>
          {name} {number}
        </li>
        <Button type="button" onClick={() => deleteContact(id)}>
          Delete
        </Button>
      </ul>
    );
  });
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
