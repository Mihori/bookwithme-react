import React from 'react';
import { Field, reduxForm } from 'redux-form';

const RegisterForm = props => {
  const { handleSubmit, pristine, reset, submitting, registerUser } = props;

  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <div>
        <label>Username</label>
        <div>
          <Field
            name="username"
            component="input"
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            className="form-control"
          />
        </div>
      </div>
      <div>
        <label>Password</label>
        <div>
          <Field
            name="password"
            component="input"
            type="password"
            className="form-control"
          />
        </div>
      </div>
      <div>
        <label>Confirmation Password</label>
        <div>
          <Field
            name="passwordConfirmation"
            component="input"
            type="password"
            className="form-control"
          />
        </div>
      </div>
      <div>
        <button className="btn btn-bwm btn-form" type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
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