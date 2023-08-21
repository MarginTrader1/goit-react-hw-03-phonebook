import { Li, Button, Ul } from './Contacts.styled';

export const ContactsList = ({ list,  deleteContact }) => {

  return (
    <Ul>
      {list.contacts.map(item => (
        <Li key={item.id}>
          <p>
            {item.name}: {item.number}
          </p>
          <Button type="button" onClick={() => deleteContact(item.id)}>
            Delete
          </Button>
        </Li>
      ))}
    </Ul>
  );
};
