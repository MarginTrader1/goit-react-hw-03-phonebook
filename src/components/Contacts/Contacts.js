import { Li, Button, Ul } from "./Contacts.styled";

export const ContactsList = ({ list }) => {
  return (
    <Ul>
      {list.contacts.map(item => (
        <Li key={item.id}>
          <p>
            {item.name}: {item.number}
          </p>
          <Button type="button">Delete</Button>
        </Li>
      ))}
    </Ul>
  );
};
