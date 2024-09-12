'use client';

import React, { useState } from 'react';
import { Progress } from "@/components/ui/progress";
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

const MobileBookingConfirmation = ({ selectedSlot, selectedDate }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const router = useRouter(); // Initialize the router for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleProceed = () => {
    // Proceed to the confirmation route
    console.log('Proceeding with booking', formData);
    router.push('/booking/confirmation'); // Navigate to the confirmation page
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Poppins, sans-serif' }}>
      {/* Left-Aligned Larger Confirmation Header */}
      <h1 style={confirmationHeadingStyle}>Confirmation</h1>

      {/* Progress Bar */}
      <Progress value={85} className="w-[60%]" style={progressBarStyle} />

      {/* Therapy Mode and Session Details in the same row */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', marginBottom: '30px' }}>
        {/* Therapy Mode Box */}
        <div style={{ flex: 1, border: '2px solid #0085D0', borderRadius: '10px', padding: '20px', backgroundColor: '#f9f9f9' }}>
          <h2 style={{ fontWeight: '600', marginBottom: '10px', color: '#0085D0' }}>Therapy Mode</h2>
          <p style={{ fontWeight: 'bold' }}>Mode: In-Person / Call / Video</p>
          <p style={{ fontWeight: 'bold' }}>Session Duration: 45 minutes</p>
        </div>

        {/* Date and Time Box */}
        <div style={{ flex: 1, border: '2px solid #0085D0', borderRadius: '10px', padding: '20px', backgroundColor: '#f9f9f9' }}>
          <h2 style={{ fontWeight: '600', marginBottom: '10px', color: '#0085D0' }}>Session Details</h2>
          <p style={{ fontWeight: 'bold' }}>Date: {selectedDate ? selectedDate.toDateString() : 'No date selected'}</p>
          <p style={{ fontWeight: 'bold' }}>Time: {selectedSlot || 'No slot selected'}</p>
        </div>
      </div>

      {/* Enter Your Details Heading */}
      <h2 style={enterDetailsHeadingStyle}>Enter your details</h2>

      {/* Form */}
      <form>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          {/* First Name */}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          {/* Last Name */}
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        {/* Email */}
        <div style={{ marginBottom: '20px' }}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyleFullWidth}
            required
          />
        </div>

        {/* Phone */}
        <div style={{ marginBottom: '10px' }}>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            style={inputStyleFullWidth}
            required
          />
        </div>

        {/* Additional Information */}
        <p style={{ marginBottom: '20px', fontSize: '14px', fontStyle: 'italic', color: '#888' }}>
          i. You will receive booking details on WhatsApp.
        </p>

        {/* Message Textarea */}
        <div style={{ marginBottom: '30px' }}>
          <textarea
            name="message"
            placeholder="Write your message"
            value={formData.message}
            onChange={handleChange}
            style={textareaStyle}
            rows="4"
            required
          />
        </div>

        {/* Horizontal Line */}
        <hr style={horizontalRuleStyle} />

        {/* Price with Rounded Rectangle and Proceed Button */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={priceContainerStyle}>
            <p style={priceTextStyle}>$2400</p>
          </div>
          <button
            type="button"
            onClick={handleProceed}
            style={proceedButtonStyle}
          >
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
};

// Larger Confirmation Heading Style
const confirmationHeadingStyle = {
  fontSize: '22px', // Increased font size
  fontWeight: '700',
  lineHeight: '30px',
  letterSpacing: '-0.02em',
  textAlign: 'left',
  marginBottom: '20px',
};

// Typography for Enter Your Details Heading
const enterDetailsHeadingStyle = {
  fontSize: '21px',
  fontWeight: '550',
  lineHeight: '19.92px',
  textAlign: 'left',
  marginBottom: '20px',
};

// Common styles for input fields
const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
  color: 'black', // Black placeholder text
};

const inputStyleFullWidth = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
  color: 'black', // Black placeholder text
};

const textareaStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
  color: 'black', // Black placeholder text
};

// Style for the Proceed Button
const proceedButtonStyle = {
  padding: '12px 20px',
  backgroundColor: '#0085D0',
  color: 'white',
  fontSize: '18px',
  fontWeight: '500',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
};

// Style for Price Container with Circular Ends
const priceContainerStyle = {
  padding: '10px 20px',
  backgroundColor: '#f9f9f9',
  border: '2px solid #0085D0',
  borderRadius: '50px', // Circular ends for the rectangle
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const priceTextStyle = {
  fontWeight: '600',
  fontSize: '20px',
  color: '#0085D0',
};

// Style for the Horizontal Rule
const horizontalRuleStyle = {
  marginBottom: '20px',
  borderTop: '2px solid black', // Black line for the horizontal rule
};

// Style for the Progress Bar
const progressBarStyle = {
  marginBottom: '10px',
  height: '6px', // 6px height
  borderRadius: '0px', // Square edges
};

export default MobileBookingConfirmation;
