"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import styles from "./Confirmation.module.css"; // Using CSS module

const ConfirmationPage: React.FC = () => {
  const router = useRouter(); // Initialize the router

  const handleBackToHome = () => {
    router.push("/profile/abcd"); // Navigate to /profile
  };

  return (
    <div className={styles.confirmationContainer}>
      {/* Heading */}
      <h1 className={styles.confirmationHeading}>Booking Confirmed!</h1>

      {/* Congratulations message */}
      <p className={styles.congratulationsMessage}>
        Congratulations! Your therapy session has been successfully scheduled.
        We&apos;re looking forward to helping you on your journey to better
        mental health.
      </p>

      {/* Instructions section */}
      <div className={styles.instructions}>
        <p>
          <strong>Instructions</strong>
        </p>
        <ul className={styles.instructionList}>
          <li>
            A confirmation email with all the session details has been sent to{" "}
            <strong>amal123@gmail.com</strong>.
          </li>
          <li>
            If this is your first session, consider jotting down any key points
            or questions you want to discuss.
          </li>
        </ul>
      </div>

      {/* Back to Home Button */}
      <button className={styles.backHomeBtn} onClick={handleBackToHome}>
        Back to Home
      </button>
    </div>
  );
};

export default ConfirmationPage;
