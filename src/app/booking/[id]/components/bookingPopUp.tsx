import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ConfirmBookingComponent: React.FC<{ dateTime: Date }> = ({ dateTime }) => {
  const [showPopup, setShowPopup] = useState(false);
  const handleConfirmBooking = () => {
    setShowPopup(true);
  };

  const backgroundColor = dateTime === undefined ? "#BDBDBD" : "#0085D0";
  const formattedDate = dateTime.toLocaleDateString(); // Format date as needed
  const price = "$100"; // Example price, adjust as needed

  return (
    <div>
      <Button
        onClick={handleConfirmBooking}
        style={{
          backgroundColor,
          color: "white",
          width: "630px",
          height: "64px",
          padding: "0 20px", // Adjust padding to add some space around the text
          borderRadius: "12px", // Rounded on all sides
          opacity: "1", // Ensure the button is visible
          fontFamily: "Poppins", // Font family
          fontSize: "24px", // Font size
          fontWeight: 500, // Font weight
          lineHeight: "32px", // Line height
          display: "flex", // Use flexbox
          alignItems: "center", // Vertically center the text
          justifyContent: "center", // Horizontally center the text
          textAlign: "left" // Text alignment inside the flex container
        }}
      >
        Proceed
      </Button>

      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent
          style={{
            maxWidth: "881px", // Increase the width of the dialog box
            display: "flex",
            flexDirection: "column", // Stack header and form vertically
            padding: "0",
          }}
        >
          <div style={{
            backgroundColor: "#0085D0",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center", // Center items vertically
            width: "881px",
            height: "141px",
            margin: "0",
            padding: "0 20px",
            borderRadius: "8px 8px 0 0", // Rounded top corners
            border: "12px solid #0085D0", // Add border with the background color
            gap: "0px",
            opacity: "1", // Ensure the header is visible
          }}>
            <span>{formattedDate}</span>
            <span>{price}</span>
          </div>
          <form className="space-y-4" style={{ flex: 1, margin: "0", padding: "20px", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", gap: "10px" }}>
              <div style={{ flex: 1 }}>
                <Input
                  id="firstName"
                  placeholder="First Name"
                  required
                />
              </div>
              <div style={{ flex: 1 }}>
                <Input
                  id="lastName"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                required
                style={{ width: "100%" }} // Full width
              />
            </div>

            <div>
              <Input
                id="phoneNumber"
                placeholder="Phone Number"
                required
                style={{ width: "100%" }} // Full width
              />
            </div>

            <div style={{ fontFamily: "Inter", fontSize: "16px", fontStyle: "italic", fontWeight: 500, lineHeight: "19.92px", textAlign: "left", color: "#868686" }}>
              You will receive booking details on WhatsApp
            </div>

            <div>
              <label htmlFor="referredByEmployer" className="block text-sm font-medium">
                Have you been referred by your employer?
              </label>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px"}}>
              <input
                type="checkbox"
                id="blueCheckbox"
                style={{ accentColor: "#0085D0", width: "21px", height: "21px", padding: "3.94px 2.63px 5.25px 3.94px", borderRadius: "4px", border: "1.8px solid", opacity: "1" }} // Checkbox styles
              />
              <label htmlFor="blueCheckbox" className="block text-sm font-medium" style={{ backgroundColor: "#0085D0", color: "white", width: "320px", height: "56px", padding: "10px 14px", borderRadius: "6px", border: "1.2px solid", display: "flex", alignItems: "center", gap: "10px" }}>
                Yes, I am employed under a partnering company
              </label>
              <Input
                id="companyDetails"
                placeholder="Partnering Company Name or Company ID"
                style={{
                  width: "320px",
                  height: "56px",
                  padding: "10px 14px",
                  borderRadius: "6px",
                  border: "1.2px solid",
                }}
              />
            </div>

            <div style={{ fontFamily: "Inter", fontSize: "16px", fontStyle: "italic", fontWeight: 500, lineHeight: "19.92px", textAlign: "left", color: "#868686" }}>
              Want the therapist to know something? Write a short message.
            </div>

            <div>
              <Textarea
                id="message"
                placeholder="Write your message"
                rows={4}
                required
                style={{ width: "100%" }} // Full width
              />
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                type="submit"
                style={{
                  backgroundColor: "#B7B7B7",
                  color: "white",
                  width: "624px",
                  height: "70px",
                  padding: "18px 30px",
                  borderRadius: "12px",
                  opacity: "1", // Ensure the button is visible
                  fontFamily: "Poppins", // Font family
                  fontSize: "24px", // Font size
                  fontWeight: 500, // Font weight
                  lineHeight: "32px", // Line height
                }}
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
