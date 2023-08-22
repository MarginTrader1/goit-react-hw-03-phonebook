import { Div } from './Filter.styled';

export const Filter = ({ addFilter }) => {
  return (
    <Div>
      <h3>Find contacts by name</h3>
      <label>
        <input
          type="text"
          name="name"
          onChange={evt => addFilter(evt.target.value)}
          placeholder="Enter name here....."
        />
      </label>
    </Div>
  );
};
