import React from 'react';
import styles from './Confirmation.module.css'; // Using CSS module

const ConfirmationPage: React.FC = () => {
  return (
    <div className={styles.confirmationContainer}>
      {/* Heading */}
      <h1 className={styles.confirmationHeading}>Booking Confirmed!</h1>

      {/* Congratulations message */}
      <p className={styles.congratulationsMessage}>
        Congratulations! Your therapy session has been successfully scheduled.
        We're looking forward to helping you on your journey to better mental health.
      </p>

      {/* Instructions section */}
      <div className={styles.instructions}>
        <p><strong>Instructions</strong></p>
        <ul className={styles.instructionList}>
          <li>A confirmation email with all the session details has been sent to <strong>amal123@gmail.com</strong>.</li>
          <li>If this is your first session, consider jotting down any key points or questions you want to discuss.</li>
        </ul>
      </div>

      {/* Back to Home Button */}
      <button className={styles.backHomeBtn}>
        Back to Home
      </button>
    </div>
  );
};

export default ConfirmationPage;
