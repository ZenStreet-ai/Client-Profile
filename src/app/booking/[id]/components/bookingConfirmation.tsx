import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"; // Assuming DialogTitle exists
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import styles from './BookingConfirmation.module.css';

const ConfirmBookingComponent = ({ selectedSlot, selectedDate }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [slotSelected, setSlotSelected] = useState(false);
  const [isPartneringCompany, setIsPartneringCompany] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    companyDetails: '',
    message: '',
  });

  useEffect(() => {
    setSlotSelected(!!selectedSlot);
  }, [selectedSlot]);

  const handleConfirmBooking = () => {
    if (slotSelected) {
      setShowPopup(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here, e.g., API call
    console.log('Form submitted:', formData);
    setShowPopup(false); // Close the popup after submission
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  // Format selectedDate to a readable format
  const formattedDate = selectedDate ? selectedDate.toLocaleDateString('en-US', { weekday: 'short', day: '2-digit', month: 'short' }) : "Select a date";
  const price = "$2400"; // Assuming static price for now

  return (
    <div className={styles.container}>
      <Button
        onClick={handleConfirmBooking}
        className={`${styles.buttonProceed} ${!slotSelected ? styles.buttonDisabled : ''}`}
        disabled={!slotSelected}
      >
        Proceed
      </Button>

      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className={styles.dialogContent}>
          <div className={styles.dialogHeader}>
            <div className={styles.dateAndSlot}>
              <p>{formattedDate}</p>
              <p>{selectedSlot || "Select a slot"}</p>
            </div>
            <div className={styles.priceContainer}>
              <p className={styles.price}>{price}</p>
            </div>
          </div>

          <form className={styles.dialogForm} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <Input 
                id="firstName" 
                placeholder="First Name" 
                required 
                value={formData.firstName} 
                onChange={handleChange} 
              />
              <Input 
                id="lastName" 
                placeholder="Last Name" 
                required 
                value={formData.lastName} 
                onChange={handleChange} 
              />
            </div>

            <Input
              id="email"
              type="email"
              placeholder="Email"
              required
              className={styles.fullWidth}
              value={formData.email}
              onChange={handleChange}
            />

            <Input
              id="phoneNumber"
              placeholder="Phone Number"
              required
              className={styles.fullWidth}
              value={formData.phoneNumber}
              onChange={handleChange}
            />

            <div className={styles.messageInfo}>
              You will receive booking details on WhatsApp
            </div>

            <div className={styles.checkboxContainer}>
              <label htmlFor="blueCheckbox" className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  id="blueCheckbox"
                  className={styles.checkboxInput}
                  checked={isPartneringCompany}
                  onChange={(e) => setIsPartneringCompany(e.target.checked)}
                />
                Yes, I am employed under a partnering company
              </label>
              {isPartneringCompany && (
                <Input
                  id="companyDetails"
                  placeholder="Partnering Company Name or Company ID"
                  className={styles.companyDetails}
                  value={formData.companyDetails}
                  onChange={handleChange}
                />
              )}
            </div>

            <div className={styles.messageInfo}>
              Want the therapist to know something? Write a short message.
            </div>

            <Textarea
              id="message"
              placeholder="Write your message"
              rows={4}
              required
              className={styles.fullWidth}
              value={formData.message}
              onChange={handleChange}
            />

            <div className="flex justify-center">
              <Button
                type="submit"
                className={styles.buttonBook}
              >
                Book Session
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ConfirmBookingComponent;
