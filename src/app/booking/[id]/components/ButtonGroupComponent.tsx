import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Calendar from 'react-calendar';
import timingsData from './timings.json';
import InPerson from '../assets/inPerson';
import Call from '../assets/Call';
import Video from '../assets/Video';
import Location from '../assets/Location';
import ConfirmBookingComponent from './bookingConfirmation';
import 'react-calendar/dist/Calendar.css';
import './ButtonGroupComponent.css';

const ButtonGroupComponent = ({ params }: { params: { id: string } }) => {
  const [selectedButton, setSelectedButton] = useState<number>(1);
  const [filterOption, setFilterOption] = useState<'slot' | 'date'>('slot');
  const [slot, setSlot] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleClick = (buttonId: number) => {
    setSelectedButton(buttonId);
  };

  const { morning, afternoon, evening } = timingsData.timings;

  return (
    <div className='therapy-opt'>
      {/* Only show progress bar on mobile using a media query */}
      <div className="mobile-progress-bar">
        <Progress value={33} className="progress-bar" />
      </div>

      <h1 className="ther-bold" style={{fontSize:"20px"}}>Please select therapy mode</h1>
      <div className='therapy-center'>
        <div className='button-container'>
          <Button
            onClick={() => handleClick(1)}
            className={`therapy-button ${selectedButton === 1 ? 'selected' : ''}`}
          >
            <InPerson 
              className='therapy-icon' 
              btn={selectedButton}
            />
          </Button>
          <span className='therapy-mode'>In-Person</span>
        </div>

        <div className='button-container'>
          <Button
            onClick={() => handleClick(2)}
            className={`therapy-button ${selectedButton === 2 ? 'selected' : ''}`}
          >
            <Video 
              className='therapy-icon' 
              btn={selectedButton}
            />
          </Button>
          <span className='therapy-mode'>Video</span>
        </div>

        <div className='button-container'>
          <Button
            onClick={() => handleClick(3)}
            className={`therapy-button ${selectedButton === 3 ? 'selected' : ''}`}
          >
            <Call 
              className='therapy-icon' 
              btn={selectedButton}
            />
          </Button>
          <span className='therapy-mode'>Call</span>
        </div>
      </div>

      <div className="loc-left">
        <Location />
        <span className='span-t'>3rd Floor, A2, 35, Block A2, Delhi</span>
      </div>
      
      <div className='filter-options'>
        <h1 className="ther-bold">Filter by</h1>
        <div className='therapy-center'>
          <Button
            onClick={() => setFilterOption('slot')}
            className={filterOption === 'slot' ? 'selected-filter' : ''}
          >
            Slot
          </Button>
          <Button
            onClick={() => setFilterOption('date')}
            className={filterOption === 'date' ? 'selected-filter' : ''}
          >
            Date
          </Button>
        </div>
      </div>

      {filterOption === 'slot' && (
        <div className='select-time-date'>
          <h1 className="ther-bold">Select a slot</h1>
          <div className='slots-row'>
            <div className='slot-grid'>
              <h2 className='slot-header'>Morning</h2>
              <div className='slot-grid-section'>
                {morning.slice(0, 2).map((timing, index) => (
                  <Button
                    key={index}
                    style={{
                      width: '153.72px',
                      height: '45.93px',
                      padding: '12.41px 19.86px',
                      borderRadius: '111.72px',
                      border: '2px solid #000000',
                      backgroundColor: slot === timing ? 'black' : 'transparent',
                      color: slot === timing ? 'white' : 'black',
                      opacity: '1',
                    }}
                    onClick={() => setSlot(timing)}
                  >
                    {timing}
                  </Button>
                ))}
              </div>
              <div className='slot-grid-section'>
                {morning.slice(2).map((timing, index) => (
                  <Button
                    key={index}
                    style={{
                      width: '153.72px',
                      height: '45.93px',
                      padding: '12.41px 19.86px',
                      borderRadius: '111.72px',
                      border: '2px solid #000000',
                      backgroundColor: slot === timing ? 'black' : 'transparent',
                      color: slot === timing ? 'white' : 'black',
                      opacity: '1',
                    }}
                    onClick={() => setSlot(timing)}
                  >
                    {timing}
                  </Button>
                ))}
              </div>
            </div>
            <div className='slot-grid'>
              <h2 className='slot-header'>Afternoon</h2>
              <div className='slot-grid-section'>
                {afternoon.slice(0, 2).map((timing, index) => (
                  <Button
                    key={index}
                    style={{
                      width: '153.72px',
                      height: '45.93px',
                      padding: '12.41px 19.86px',
                      borderRadius: '111.72px',
                      border: '2px solid #000000',
                      backgroundColor: slot === timing ? 'black' : 'transparent',
                      color: slot === timing ? 'white' : 'black',
                      opacity: '1',
                    }}
                    onClick={() => setSlot(timing)}
                  >
                    {timing}
                  </Button>
                ))}
              </div>
              <div className='slot-grid-section'>
                {afternoon.slice(2).map((timing, index) => (
                  <Button
                    key={index}
                    style={{
                      width: '153.72px',
                      height: '45.93px',
                      padding: '12.41px 19.86px',
                      borderRadius: '111.72px',
                      border: '2px solid #000000',
                      backgroundColor: slot === timing ? 'black' : 'transparent',
                      color: slot === timing ? 'white' : 'black',
                      opacity: '1',
                    }}
                    onClick={() => setSlot(timing)}
                  >
                    {timing}
                  </Button>
                ))}
              </div>
            </div>
            <div className='slot-grid'>
              <h2 className='slot-header'>Evening</h2>
              <div className='slot-grid-section'>
                {evening.slice(0, 2).map((timing, index) => (
                  <Button
                    key={index}
                    style={{
                      width: '153.72px',
                      height: '45.93px',
                      padding: '12.41px 19.86px',
                      borderRadius: '111.72px',
                      border: '2px solid #000000',
                      backgroundColor: slot === timing ? 'black' : 'transparent',
                      color: slot === timing ? 'white' : 'black',
                      opacity: '1',
                    }}
                    onClick={() => setSlot(timing)}
                  >
                    {timing}
                  </Button>
                ))}
              </div>
              <div className='slot-grid-section'>
                {evening.slice(2).map((timing, index) => (
                  <Button
                    key={index}
                    style={{
                      width: '153.72px',
                      height: '45.93px',
                      padding: '12.41px 19.86px',
                      borderRadius: '111.72px',
                      border: '2px solid #000000',
                      backgroundColor: slot === timing ? 'black' : 'transparent',
                      color: slot === timing ? 'white' : 'black',
                      opacity: '1',
                    }}
                    onClick={() => setSlot(timing)}
                  >
                    {timing}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="calendar-container">
            <Calendar
              onChange={setDate}
              value={date}
              minDate={new Date()}
              className="custom-calendar"
              tileClassName={({ date, view }) => view === 'month' && (date.getDay() === 0 || date.getDay() === 6) ? 'weekend' : null}
            />
          </div>
        </div>
      )}
      
      {filterOption === 'date' && (
        <div className="box-container">
          <h1 className="ther-bold">Select a date</h1>
          <div className="calendar-container">
            <Calendar
              onChange={setDate}
              value={date}
              minDate={new Date()}
              className="custom-calendar"
            />
          </div>

          <div className="select-time-date">
            <h1 className="ther-bold">Select a slot</h1>
            <div className="slots-row">
              <div className="slot-grid">
                <h2 className="slot-header">Morning</h2>
                <div className="slot-grid-section">
                  {morning.slice(0, 2).map((timing, index) => (
                    <Button
                      key={index}
                      style={{
                        width: '153.72px',
                        height: '45.93px',
                        padding: '12.41px 19.86px',
                        borderRadius: '111.72px',
                        border: '2px solid #000000',
                        backgroundColor: slot === timing ? 'black' : 'transparent',
                        color: slot === timing ? 'white' : 'black',
                        opacity: '1',
                      }}
                      onClick={() => setSlot(timing)}
                    >
                      {timing}
                    </Button>
                  ))}
                </div>
                <div className="slot-grid-section">
                  {morning.slice(2).map((timing, index) => (
                    <Button
                      key={index}
                      style={{
                        width: '153.72px',
                        height: '45.93px',
                        padding: '12.41px 19.86px',
                        borderRadius: '111.72px',
                        border: '2px solid #000000',
                        backgroundColor: slot === timing ? 'black' : 'transparent',
                        color: slot === timing ? 'white' : 'black',
                        opacity: '1',
                      }}
                      onClick={() => setSlot(timing)}
                    >
                      {timing}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="slot-grid">
                <h2 className="slot-header">Afternoon</h2>
                <div className="slot-grid-section">
                  {afternoon.slice(0, 2).map((timing, index) => (
                    <Button
                      key={index}
                      style={{
                        width: '153.72px',
                        height: '45.93px',
                        padding: '12.41px 19.86px',
                        borderRadius: '111.72px',
                        border: '2px solid #000000',
                        backgroundColor: slot === timing ? 'black' : 'transparent',
                        color: slot === timing ? 'white' : 'black',
                        opacity: '1',
                      }}
                      onClick={() => setSlot(timing)}
                    >
                      {timing}
                    </Button>
                  ))}
                </div>
                <div className="slot-grid-section">
                  {afternoon.slice(2).map((timing, index) => (
                    <Button
                      key={index}
                      style={{
                        width: '153.72px',
                        height: '45.93px',
                        padding: '12.41px 19.86px',
                        borderRadius: '111.72px',
                        border: '2px solid #000000',
                        backgroundColor: slot === timing ? 'black' : 'transparent',
                        color: slot === timing ? 'white' : 'black',
                        opacity: '1',
                      }}
                      onClick={() => setSlot(timing)}
                    >
                      {timing}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="slot-grid">
                <h2 className="slot-header">Evening</h2>
                <div className="slot-grid-section">
                  {evening.slice(0, 2).map((timing, index) => (
                    <Button
                      key={index}
                      style={{
                        width: '153.72px',
                        height: '45.93px',
                        padding: '12.41px 19.86px',
                        borderRadius: '111.72px',
                        border: '2px solid #000000',
                        backgroundColor: slot === timing ? 'black' : 'transparent',
                        color: slot === timing ? 'white' : 'black',
                        opacity: '1',
                      }}
                      onClick={() => setSlot(timing)}
                    >
                      {timing}
                    </Button>
                  ))}
                </div>
                <div className="slot-grid-section">
                  {evening.slice(2).map((timing, index) => (
                    <Button
                      key={index}
                      style={{
                        width: '153.72px',
                        height: '45.93px',
                        padding: '12.41px 19.86px',
                        borderRadius: '111.72px',
                        border: '2px solid #000000',
                        backgroundColor: slot === timing ? 'black' : 'transparent',
                        color: slot === timing ? 'white' : 'black',
                        opacity: '1',
                      }}
                      onClick={() => setSlot(timing)} 
                    >
                      {timing}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <ConfirmBookingComponent selectedSlot={slot} selectedDate={date} />
    </div>
  );
};

export default ButtonGroupComponent;
