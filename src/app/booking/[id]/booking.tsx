import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const ConfirmBookingComponent: React.FC<{ dateTime: Date }> = ({ dateTime }) => {
  return (
    <div>
        <Dialog open={showPopup} onOpenChange={setShowPopup}>
          <DialogContent>
            <DialogHeader>
              {/* <DialogTitle>{dateTime}</DialogTitle> */}
            </DialogHeader>
            <form className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium">
                  First Name
                </label>
                <Input
                  id="firstName"
                  placeholder="Enter your first name"
                  required
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  placeholder="Enter your last name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Write your message"
                  rows={4}
                  required
                />
              </div>

              <Button type="submit">Submit</Button>
            </form>
          </DialogContent>
        </Dialog>
    </div>
  );
};

export default ConfirmBookingComponent;
