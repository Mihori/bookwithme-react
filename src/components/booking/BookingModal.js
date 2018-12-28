import React from 'react';
import Modal from 'react-responsive-modal';

export function BookingModal(props) {
  const { open, closeModal } = props;

  return (
    <Modal open={open} onClose={closeModal} >
     <h4>Confirm Booking </h4>
  </Modal>
  )
}