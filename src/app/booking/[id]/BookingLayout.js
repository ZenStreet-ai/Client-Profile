// components/BookingLayout.js
import React from 'react';
import './BookingLayout.css';

const BookingLayout = ({ children }) => {
  return (
    <div className="booking-layout">
      {children}
    </div>
  );
};

export default BookingLayout;
