// используем библиотеку Formik для заполнения форм ввода
import { Formik } from 'formik';
import { StyledForm, StyledField, StyledError } from './ContactForm.styled';
import * as Yup from 'yup';

// используем библиотеку Nanoid для генерации случайного id
import { nanoid } from 'nanoid';

// валидация формы через библиотеку Yup
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

export const ContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        // submit формы ввода возвращает объект values, который мы распыляем в новый объект и добавляем сгенерированное id
        addContact({ ...values, id: nanoid() });

        //ресет формы
        actions.resetForm();
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
          <StyledField
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="111-11-11"
            required
          />
          <StyledError name="number" component="div" />
        </label>

        <button type="submit">Submit</button>
      </StyledForm>
    </Formik>
  );
};
