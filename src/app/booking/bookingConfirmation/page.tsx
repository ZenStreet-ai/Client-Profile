"use client";

import React, { Suspense, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { useRouter, useSearchParams } from "next/navigation";

const SelectedSlot = () => {
  const searchParams = useSearchParams();
  const selectedSlot = searchParams.get("selectedSlot");
  return (
    <p className="font-bold">Time: {selectedSlot || "No slot selected"}</p>
  );
};

const SelectedDate = () => {
  const searchParams = useSearchParams();
  const selectedDate = new Date(searchParams.get("selectedDate") ?? new Date());

  return (
    <p className="font-bold">
      Date: {selectedDate ? selectedDate.toDateString() : "No date selected"}
    </p>
  );
};

const MobileBookingConfirmation: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleProceed = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission
    console.log("Proceeding with booking", formData);
    router.push("/booking/confirmation");
  };

  return (
    <div className="p-5 font-poppins">
      <h1 className="text-2xl font-bold mb-5">Confirmation</h1>
      <Progress value={85} className="w-3/5 mb-2 h-1 rounded-none" />

      <div className="flex gap-5 mb-7">
        <div className="flex-1 border-2 border-[#0085D0] rounded-lg p-5 bg-gray-100">
          <h2 className="font-semibold mb-2 text-[#0085D0]">Therapy Mode</h2>
          <p className="font-bold">Mode: In-Person / Call / Video</p>
          <p className="font-bold">Session Duration: 45 minutes</p>
        </div>

        <div className="flex-1 border-2 border-[#0085D0] rounded-lg p-5 bg-gray-100">
          <h2 className="font-semibold mb-2 text-[#0085D0]">Session Details</h2>
          <Suspense>
            <SelectedDate />
            <SelectedSlot />
          </Suspense>
        </div>
      </div>

      <h2 className="text-xl font-medium mb-5">Enter your details</h2>

      <form onSubmit={handleProceed}>
        <div className="flex gap-5 mb-5">
          <div className="flex-1">
            <label htmlFor="firstName" className="sr-only">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border rounded-md"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className="sr-only">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 border rounded-md"
              required
            />
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="phoneNumber" className="sr-only">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>

        <p className="mb-5 text-sm italic text-gray-600">
          i. You will receive booking details on WhatsApp.
        </p>

        <div className="mb-7">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Write your message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            rows={4}
            required
            aria-describedby="messageHelp"
          />
        </div>

        <hr className="mb-5 border-t-2 border-black" />

        <div className="flex justify-between items-center">
          <div className="p-3 bg-gray-100 border-2 border-[#0085D0] rounded-full flex justify-center items-center">
            <p className="font-semibold text-xl text-[#0085D0]">$2400</p>
          </div>
          <button
            type="submit"
            className="py-3 px-5 bg-[#0085D0] text-white text-lg font-medium rounded-md cursor-pointer"
          >
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
};

export default MobileBookingConfirmation;
