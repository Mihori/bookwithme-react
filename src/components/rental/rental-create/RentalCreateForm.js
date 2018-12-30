import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormInput } from 'shared/form/FormInput';
import { ResponseError } from 'shared/form/ResponseError';

const RentalCreateForm = props => {
  const { handleSubmit, pristine, submitting, submitCb, valid, options, errors } = props
  return (
    <form onSubmit={handleSubmit(submitCb)}>
    <Field
        name="title"
        type="text"
        label='Title'
        className='form-control'
        component={FormInput}
      />
       <Field
        name="description"
        type="text"
        label='Description'
        rows='6'
        className='form-control'
        component={FormInput}
      />
      <Field
        name="city"
        type="text"
        label='City'
        className='form-control'
        component={FormInput}
      />
      <Field
        name="street"
        type="text"
        label='Street'
        className='form-control'
        component={FormInput}
      />
      <Field
        options={options}
        name="category"
        label='Category'
        className='form-control'
        component={FormInput}
      />
      <Field
        name="image"
        label='Image'
        component={FormInput}
      />
      <Field
        name="bedrooms"
        type="number"
        label='Bedrooms'
        className='form-control'
        component={FormInput}
      />
      <Field
        name="dailyRate"
        type="text"
        label='Daily Rate'
        className='form-control'
        symbol='$'
        component={FormInput}
      />
      <Field
        name="shared"
        type="checkbox"
        label='Shared'
        className='form-control'
        component={FormInput}
      />
      <button className='btn btn-bwm btn-form' type="submit" disabled={!valid || pristine || submitting}>
        Create Rental
      </button>
      <ResponseError errors={errors} />
    </form>
  )
}

export default reduxForm({
  form: 'rentalCreateForm',
  initialValues: { shared: false, category: 'apartment'}
})(RentalCreateForm)