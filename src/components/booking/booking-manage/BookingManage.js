import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

export class BookingManage extends React.Component {

  componentWillMount() {
    this.props.dispatch(actions.fetchUserBookings());
  }

  render() {
    const { userBookings } = this.props;

    return (
      <div>
        {userBookings.map((booking, index) => <p key={index}> {booking.startAt} - {booking.endAt} </p>)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userBookings: state.userBookings.data
  }
}

export default connect(mapStateToProps)(BookingManage);
