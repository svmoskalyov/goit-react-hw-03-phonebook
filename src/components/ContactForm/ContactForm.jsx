import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ImUserPlus } from 'react-icons/im';
import { Forma, Label, Input } from './ContactForm.styled';
import { Button } from 'components/Button/Button';

const phoneRegex = RegExp(
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
);

const SignupSchema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.string().matches(phoneRegex, 'Invalid phone').required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    addContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <Forma>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Your name"
          />
          <ErrorMessage name="name" />
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="000-00-00"
          />
          <ErrorMessage name="number" />
        </Label>

        <Button type="submit" icon={ImUserPlus} aria-label="Add contact">
          Add contact
        </Button>
      </Forma>
    </Formik>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
