// booking/page.tsx
"use client";
import React from "react";
import ButtonGroupComponent from "./components/ButtonGroupComponent";
import BookingLayout from "./layout";

const BookingPage: React.FC = () => {
  return (
    <BookingLayout>
      <ButtonGroupComponent params={{ id: "some-id" }} />
    </BookingLayout>
  );
};

export default BookingPage;
