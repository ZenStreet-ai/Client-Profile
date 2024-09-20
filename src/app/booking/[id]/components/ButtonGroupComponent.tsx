import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Progress from "./progress";
import Calendar from "react-calendar";
import timingsData from "./timings.json";
import InPerson from "../assets/InPerson"; // In-Person icon
import Video from "../assets/Video"; // Video icon
import Call from "../assets/Call"; // Call icon
import Location from "../assets/Location"; // Location icon component
import ConfirmBookingComponent from "./bookingConfirmation";
import "react-calendar/dist/Calendar.css";
import "./ButtonGroupComponent.css";
import { useRouter } from "next/navigation";

export type Range<T> = [T, T];
type ValuePiece = Date | null;
export type Value = ValuePiece | Range<ValuePiece>;

const ButtonGroupComponent = ({ params }: { params: { id: string } }) => {
  const [selectedButton, setSelectedButton] = useState<number>(1);
  const [filterOption, setFilterOption] = useState<"slot" | "date">("slot");
  const [slot, setSlot] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const router = useRouter();

  const handleClick = (buttonId: number) => {
    setSelectedButton(buttonId);
  };

  // SlotTimeDateComponent defined within ButtonGroupComponent
  const SlotTimeDateComponent = ({
    selectedSlot,
    setSlot,
  }: {
    selectedSlot: string | undefined;
    setSlot: (slot: string) => void;
  }) => {
    const { morning, afternoon, evening } = timingsData.timings;

    const renderSlotButtons = (timingArray: string[], label: string) => (
      <div className="slot-grid">
        <h2 className="slot-header">{label}</h2>
        <div className="slot-grid-section">
          {timingArray.map((timing, index) => (
            <Button
              key={index}
              style={{
                width: "153px",
                height: "46px",
                padding: "12px 20px",
                borderRadius: "112px",
                border: "2px solid #000000",
                backgroundColor:
                  selectedSlot === timing ? "black" : "transparent",
                color: selectedSlot === timing ? "white" : "black",
                opacity: "1",
              }}
              onClick={() => setSlot(timing)}
            >
              {timing}
            </Button>
          ))}
        </div>
      </div>
    );

    return (
      <div className="select-time-date">
        <h1 className="ther-bold">Select a slot</h1>
        <div className="slots-row">
          {renderSlotButtons(morning, "Morning")}
          {renderSlotButtons(afternoon, "Afternoon")}
          {renderSlotButtons(evening, "Evening")}
        </div>
      </div>
    );
  };

  // CalendarComponent defined within ButtonGroupComponent
  const CalendarComponent = ({
    date,
    setDate,
  }: {
    date: Date | undefined;
    setDate: (value: Value) => void;
  }) => {
    return (
      <div className="calendar-container">
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <b>Available Dates</b>
          <span
            style={{
              display: "inline-block",
              marginLeft: "10px",
              width: "10px",
              height: "10px",
              backgroundColor: "blue",
            }}
          ></span>
        </h2>

        <Calendar
          onChange={setDate}
          value={date}
          minDate={new Date()}
          className="custom-calendar"
          tileClassName={({ date, view }) => {
            if (view === "month") {
              const day = date.getDay();
              if (day === 0 || day === 6) {
                return "unavailable-date"; // Style weekends as unavailable
              }
              return "available-date"; // Style weekdays as available
            }
            return null;
          }}
        />
      </div>
    );
  };

  const changeDate = (value: Value) => {
    if (value instanceof Date) {
      setDate(value ?? undefined);
    }
  };

  return (
    <div className="therapy-opt">
      {isMobile && <Progress value={33} className="mb-4" />}

      <h1 className="ther-bold" style={{ fontSize: "20px" }}>
        Please select therapy mode
      </h1>
      <div className="therapy-center">
        {/* Therapy Buttons */}
        <div className="button-container">
          <Button
            onClick={() => handleClick(1)}
            className={`therapy-button ${selectedButton === 1 ? "selected" : ""}`}
          >
            <InPerson className="therapy-icon" btn={selectedButton} />
          </Button>
          <span className="therapy-mode">In-Person</span>
        </div>

        <div className="button-container">
          <Button
            onClick={() => handleClick(2)}
            className={`therapy-button ${selectedButton === 2 ? "selected" : ""}`}
          >
            <Video className="therapy-icon" btn={selectedButton} />
          </Button>
          <span className="therapy-mode">Video</span>
        </div>

        <div className="button-container">
          <Button
            onClick={() => handleClick(3)}
            className={`therapy-button ${selectedButton === 3 ? "selected" : ""}`}
          >
            <Call className="therapy-icon" btn={selectedButton} />
          </Button>
          <span className="therapy-mode">Call</span>
        </div>
      </div>

      {/* Location Section with center alignment */}
      <div className="loc-left">
        <Location className="location-icon" />
        <span className="location-text">
          3rd Floor, A2, 35, Block A2, Delhi
        </span>
      </div>

      <div className="filter-options">
        {!isMobile && <h1 className="ther-bold">Filter by</h1>}
        {isMobile ? (
          <div className="mobile-filter">
            <label className={filterOption === "slot" ? "selected-option" : ""}>
              <input
                type="radio"
                name="filterOption"
                value="slot"
                checked={filterOption === "slot"}
                onChange={() => setFilterOption("slot")}
              />
              Slots
            </label>
            <label className={filterOption === "date" ? "selected-option" : ""}>
              <input
                type="radio"
                name="filterOption"
                value="date"
                checked={filterOption === "date"}
                onChange={() => setFilterOption("date")}
              />
              Date
            </label>
          </div>
        ) : (
          <div className="therapy-center">
            <Button
              onClick={() => setFilterOption("slot")}
              className={filterOption === "slot" ? "selected-filter" : ""}
            >
              Slot
            </Button>
            <Button
              onClick={() => setFilterOption("date")}
              className={filterOption === "date" ? "selected-filter" : ""}
            >
              Date
            </Button>
          </div>
        )}
      </div>

      {/* Slot and Calendar Display based on filterOption */}
      {filterOption === "slot" && (
        <>
          <SlotTimeDateComponent selectedSlot={slot} setSlot={setSlot} />
          {<CalendarComponent date={date} setDate={changeDate} />}
        </>
      )}

      {filterOption === "date" && (
        <>
          <CalendarComponent date={date} setDate={changeDate} />
          <SlotTimeDateComponent selectedSlot={slot} setSlot={setSlot} />
        </>
      )}

      {!isMobile ? (
        <ConfirmBookingComponent selectedSlot={slot} selectedDate={date} />
      ) : (
        <button
          onClick={() => router.push("/booking/bookingConfirmation")}
          className={`buttonProceed ${!(slot && date) ? "buttonDisabled" : ""}`}
          disabled={!(slot && date)}
        >
          Proceed
        </button>
      )}
    </div>
  );
};

export default ButtonGroupComponent;
