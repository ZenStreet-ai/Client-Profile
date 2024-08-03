'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';

interface BookingDetailProps {
  params: {
    id: string;
  };
}

const BookingDetail: FC<BookingDetailProps> = ({ params }) => {
  const { id } = params;

  return (
    <div>
      <h1>Booking ID: {id}</h1>
      {/* Add your booking details here */}
    </div>
  );
};

export default BookingDetail;
