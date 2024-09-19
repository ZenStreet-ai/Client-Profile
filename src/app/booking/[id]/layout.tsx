// booking/layout.tsx
import React from "react";
import "./BookingLayout.css"; // Import layout-specific CSS

const BookingLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="booking-layout">{children}</div>;
};

export default BookingLayout;
