import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormInput } from '../../shared/form/FormInput';

const LoginForm = props => {
  const { handleSubmit, pristine, submitting, loginUser, valid } = props;

  return (
    <form onSubmit={handleSubmit(loginUser)}>
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
        <button className="btn btn-bwm btn-form" type="submit" disabled={!valid || pristine || submitting}>
          Submit
        </button>
    </form>
  )
}

export default reduxForm({
  form: 'registerForm',
})(LoginForm);