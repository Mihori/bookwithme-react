import React from 'react';

export class FileUpload extends React.Component {

  constructor() {
    super();

    this.onChange = this.onChange.bind(this);

  }

  onCHange(event) {
    const { input: { onChange }} = this.props;

    onChange('http://inmostella.com/wp-content/uploads/2018/11/5-1024x683.jpg');

  }

  render() {
    const { label, meta: { touched, error }} = this.props;

    return (
      <div className='form-group'>
        <label>{label}</label>
        <div className='input-group'>
        <input type='file'
               accept='.jpeg .png .jpg'
               onChange={this.onChange} />
        </div>
        {touched && ((error && <div className='alert alert-danger'>{error}</div>))}
      </div>
    )
  }

}
