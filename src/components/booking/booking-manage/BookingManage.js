import React from 'react';
import { connect } from 'react-redux';

export class BookingManage extends React.Component {


  render() {
    const { userBookings } = this.props;

    return (
      <div>
        {userBookings.map(booking => <p> {booking.startAt} - {booking.endAt} </p>)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userBookings: state.userBookings
  }
}

export default connect(mapStateToProps)(BookingManage);
