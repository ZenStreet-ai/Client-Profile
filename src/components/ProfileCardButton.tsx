"use client"; // This makes the component client-side rendered

import Link from "next/link";
import CustomButton from "./CustomButton";

interface ClientButtonsProps {
  id: string;
}

const ProfileCardButton = ({ id }: ClientButtonsProps) => {
  return (
    <div className="flex flex-col p-6 mt-[31px] w-[415px] gap-4">
      <CustomButton
        variant="primary"
        size="primary"
        className="w-full text-[#0069D5] py-[0.8rem] px-[1.5rem]"
      >
        <Link
          href={`/booking/${id}`}
          className="w-[153px] h-[36px] text-[1.25rem] leading-9"
        >
          Book session
        </Link>
      </CustomButton>
      <CustomButton
        variant="outline"
        size="primary"
        className="w-full text-[#FFF] py-[0.8rem] px-[1.5rem] "
        style={{ border: "2px solid #FFF" }}
      >
        <p className="w-[153px] h-[36px] text-[1.25rem] leading-9">
          Your bookings
        </p>
      </CustomButton>
    </div>
  );
};

export default ProfileCardButton;
