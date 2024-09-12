// MobileBookingConfirmation.js
import React from 'react';

const MobileBookingConfirmation = ({ selectedSlot, selectedDate }) => {
  return (
    <div>
      <h1>Mobile Booking Confirmation</h1>
      <p>Selected Slot: {selectedSlot}</p>
      <p>Selected Date: {selectedDate ? selectedDate.toDateString() : 'No date selected'}</p>
    </div>
  );
};

export default MobileBookingConfirmation;
