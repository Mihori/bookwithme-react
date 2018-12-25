import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormInput } from '../../shared/form/FormInput';
import { required, minLength4 } from '../../shared/form/validators';
import { ResponseError } from '../../shared/form/ResponseError';

const LoginForm = props => {
  const { handleSubmit, pristine, submitting, loginUser, valid, errors } = props;

  return (
    <form onSubmit={handleSubmit(loginUser)}>
          <Field
            name="email"
            label="Email"
            type="email"
            className="form-control"
            component={FormInput}
            validate={[required, minLength4]}
          />
          <Field
            name="password"
            label="Password"
            type="password"
            className="form-control"
            component={FormInput}
            validate={[required]}
          />
        <button className="btn btn-bwm btn-form" type="submit" disabled={!valid || pristine || submitting}>
          Submit
        </button>
        <ResponseError errors={errors} />
    </form>
  )
}

export default reduxForm({
  form: 'loginForm',
})(LoginForm);