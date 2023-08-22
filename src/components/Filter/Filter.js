import { Div } from "./Filter.styled";

export const Filter = () => {
  return (
    <Div>
      <h3>Find contacts by name</h3>
      <label>
        <input type="text" name="name" placeholder="Enter name here....." />
      </label>
    </Div>
  );
};
