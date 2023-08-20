import { Formik } from 'formik';
import { StyledForm, StyledField, StyledError } from './ContactForm.styled';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Заполните поле'),
  number: Yup.number()
    .positive()
    .min(5, 'Too Short!')
    .required('Заполните поле'),
});

export const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <StyledForm>
        <label>
          Name
          <StyledField name="name" placeholder="Jane Doe" />
          <StyledError name="name" component="div" />
        </label>

        <label>
          Number
          <StyledField name="number" placeholder="111-11-11" />
          <StyledError name="number" component="div" />
        </label>

        <button type="submit">Submit</button>
      </StyledForm>
    </Formik>
  );
};
