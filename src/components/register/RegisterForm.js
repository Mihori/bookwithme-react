import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormInput } from '../../shared/form/FormInput';

const RegisterForm = props => {
  const { handleSubmit, pristine, submitting, registerUser, valid } = props;

  return (
    <form onSubmit={handleSubmit(registerUser)}>
          <Field
            name="username"
            label="Username"
            type="text"
            className="form-control"
            component={FormInput}
          />
          <Field
            name="email"
            label="Email"
            type="email"
            className="form-control"
            component={FormInput}
          />
          <Field
            name="password"
            label="Password"
            type="password"
            className="form-control"
            component={FormInput}
          />
          <Field
            name="passwordConfirmation"
            label="Confirmation Password"
            type="password"
            className="form-control"
            component={FormInput}
          />
        <button className="btn btn-bwm btn-form" type="submit" disabled={!valid || pristine || submitting}>
          Submit
        </button>
    </form>
  )
}

const validate = values => {
  const errors = {};

  if (values.username && values.username.length < 4) {
    errors.username = 'Username min length is 4 characters!';
  }

  if (!values.email) {
    errors.email = 'Please enter email!';
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = 'Please enter password confirmation!';
  }

  if (values.password !== values.passwordConfirmation) {
    errors.password = 'Passwords must be the same';
  }

  return errors;
}

export default reduxForm({
  form: 'registerForm',
  validate
})(RegisterForm);