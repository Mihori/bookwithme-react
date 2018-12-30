import React from 'react';

export class RentalCreate extends React.Component {

  render() {
    return (
      <section id='newRental'>
        <div className='bwm-form'>
          <div className='row'>
            <div className='col-md-5'>
              <h1 className='page-title'>Create Rental</h1>
              RentalForm placeholder
            </div>
            <div className='col-md-6 ml-auto'>
              <div className='image-container'>
                <h2 className='catchphrase'>Hundreds of awesome places in reach of few clicks.</h2>
                <img src={process.env.PUBLIC_URL + '/img/create-rental.jpg'} alt=''/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

}