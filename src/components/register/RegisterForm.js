import React from 'react';
import { Field, reduxForm } from 'redux-form';

const RegisterForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  
  return (
    <form onSubmit={handleSubmit}>
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
            name="password"
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

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(RegisterForm);