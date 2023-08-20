import { styled } from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  gap: 15px;
`;

export const StyledField = styled(Field)`
  padding: 10px;
  margin-left: 15px;
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
`;
