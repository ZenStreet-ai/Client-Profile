'use client'
import React, { useState } from 'react';
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import timingsData from './timings.json';
import InPerson from './assets/inPerson';
import Call from './assets/Call';
import Video from './assets/Video';
import ConfirmBookingComponent from './booking';


const ButtonGroupComponent = ({ params }: { params: { id: string } }) => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [filterBtn, setFilterBtn] = useState(4);
  const [showPopup, setShowPopup] = useState(false);
  const [slot, setSlot] = useState();

  const handleConfirmBooking = () => {
    setShowPopup(true);
  };

  const handleClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const handleFilter = (buttonId) => {
    setFilterBtn(buttonId);
  };

  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const { morning, afternoon, evening } = timingsData.timings;

  return (
    <div className='therapy-opt'>
      <Progress value={33} />
      <h1 className="ther-bold">Select therapy mode</h1>
      <div className='therapy-center'>
          <Button
            onClick={() => handleClick(1)}
            style={{
              backgroundColor: selectedButton === 1 ? '#1F9FE6' : 'transparent',
              borderColor: '#1F9FE6',
              borderRadius: '12px', // Added borderRadius for rounded edges
              width: '8%',
              height: '120px',
              margin: '0 10px',
              display: "flex",
              flexDirection: "column"
            }}
          >
            <InPerson btn={selectedButton} />
            <span className='therapy-mode' style={{ color:selectedButton === 1 ?'white':'#516E8A', }}>In-Person</span>
          </Button>
          <Button
            onClick={() => handleClick(2)}
            style={{
              backgroundColor: selectedButton === 2 ? '#1F9FE6' : 'transparent',
              borderColor: '#1F9FE6',
              borderRadius: '12px', // Added borderRadius for rounded edges
              width: '8%',
              height: '120px',
              margin: '0 10px',
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Video btn={selectedButton} />
            <span className='therapy-mode' style={{ color:selectedButton === 2 ?'white':'#516E8A', }}>Video</span>
          </Button>
          <Button
            onClick={() => handleClick(3)}
            style={{
              backgroundColor: selectedButton === 3 ? '#1F9FE6' : 'transparent',
              borderColor: '#1F9FE6',
              borderRadius: '12px', // Added borderRadius for rounded edges
              width: '8%',
              height: '120px',
              margin: '0 10px',
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Call btn={selectedButton} />
            <span className='therapy-mode' style={{ color:selectedButton === 3 ?'white':'#516E8A', }}>Call</span>
          </Button>
      </div>
      <div className='therapy-left'>
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.2461 13.8242C11.5044 13.8242 10.7794 13.6043 10.1627 13.1922C9.54602 12.7802 9.06538 12.1945 8.78155 11.5093C8.49772 10.8241 8.42346 10.0701 8.56815 9.34263C8.71285 8.6152 9.07 7.94702 9.59445 7.42257C10.1189 6.89812 10.7871 6.54097 11.5145 6.39628C12.2419 6.25158 12.9959 6.32584 13.6812 6.60967C14.3664 6.8935 14.9521 7.37415 15.3641 7.99083C15.7762 8.60752 15.9961 9.33254 15.9961 10.0742C15.9949 11.0684 15.5994 12.0216 14.8964 12.7246C14.1934 13.4276 13.2403 13.823 12.2461 13.8242ZM12.2461 7.82422C11.8011 7.82422 11.3661 7.95618 10.9961 8.20341C10.6261 8.45065 10.3377 8.80205 10.1674 9.21318C9.99707 9.62432 9.95251 10.0767 10.0393 10.5132C10.1261 10.9496 10.3404 11.3505 10.6551 11.6652C10.9698 11.9799 11.3707 12.1942 11.8071 12.281C12.2436 12.3678 12.696 12.3232 13.1071 12.153C13.5183 11.9827 13.8697 11.6943 14.1169 11.3243C14.3641 10.9542 14.4961 10.5192 14.4961 10.0742C14.4955 9.47767 14.2583 8.90572 13.8364 8.48389C13.4146 8.06206 12.8427 7.82482 12.2461 7.82422Z" fill="black"/>
        <path d="M12.2461 22.8242L5.9191 15.3625C5.83118 15.2504 5.74418 15.1377 5.6581 15.0242C4.57788 13.6003 3.99409 11.8615 3.9961 10.0742C3.9961 7.88618 4.86529 5.78776 6.41247 4.24059C7.95964 2.69341 10.0581 1.82422 12.2461 1.82422C14.4341 1.82422 16.5326 2.69341 18.0797 4.24059C19.6269 5.78776 20.4961 7.88618 20.4961 10.0742C20.4978 11.8607 19.9143 13.5985 18.8348 15.022L18.8341 15.0242C18.8341 15.0242 18.6091 15.3197 18.5753 15.3595L12.2461 22.8242ZM6.85585 14.1205C6.85585 14.1205 7.0306 14.3515 7.07035 14.401L12.2461 20.5052L17.4286 14.3927C17.4616 14.3515 17.6371 14.119 17.6378 14.1182C18.5208 12.9551 18.9979 11.5345 18.9961 10.0742C18.9961 8.28401 18.2849 6.56712 17.0191 5.30125C15.7532 4.03538 14.0363 3.32422 12.2461 3.32422C10.4559 3.32422 8.739 4.03538 7.47313 5.30125C6.20726 6.56712 5.4961 8.28401 5.4961 10.0742C5.49425 11.5354 5.97193 12.9569 6.85585 14.1205Z" fill="black"/>
      </svg>
      <span className='therapy-mode' style={{marginTop:"0"}}>Eg. Address 123, Bangalore</span>
      </div>
      <h1 className="ther-bold" style={{fontSize:"25px"}}>Filter By</h1>
      <div className='therapy-center' style={{justifyContent:"center"}}>
        <Button className='btn-opt' onClick={()=>handleFilter(4)} 
        style={{backgroundColor: filterBtn === 4? 'black' : 'white',
        color: filterBtn === 4? 'white':'black'}}>
          Slots
        </Button>
        <Button className='btn-opt' onClick={()=>handleFilter(5)} 
        style={{backgroundColor: filterBtn === 5? 'black' : 'white',
        color: filterBtn === 5? 'white':'black'}}>
          Date
        </Button>
      </div>
      <div className="therapy-center" style={{display: filterBtn===4? "block":"none"}}>
        <div className="slots">
          <h3 className='therapy-mode'>Morning</h3>
          <div className="grid">
            {morning.map((time, index) => (
              <Button variant='outline' key={`morning-${index}`}>{time}</Button >
            ))}
          </div>
        </div>

        <div className="slots">
        <h3 className='therapy-mode'>Afternoon</h3>
        <div className="grid">
          {afternoon.map((time, index) => (
            <Button variant='outline' key={`afternoon-${index}`}>{time}</Button>
          ))}
        </div>
      </div>
      
      <div className="slots">
        <h3 className='therapy-mode'>Evening</h3>
        <div className="grid">
          {evening.map((time, index) => (
            <Button variant='outline' key={`evening-${index}`}>{time}</Button>
          ))}
        </div>
      </div>
      </div>
      <div className="filter-title">
        <h1 style={{ display: filterBtn ===5?'block':'none' }}>Select one of the available dates</h1>
      </div>
      <div className="therapy-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          style={{display: filterBtn ===5?'block':'none'}}
        />
      </div>
      <div className="therapy-center">
      <Button
          className="confirm-btn"
          onClick={handleConfirmBooking}
          style={{
            backgroundColor: 'green',
            color: 'white',
            marginTop: '20px'
          }}
        >
          Confirm Booking
        </Button>
        {showPopup && (
          <ConfirmBookingComponent dateTime={date} showPopup={showPopup} />
        )}
      </div>
      
    </div>
  );
};

export default ButtonGroupComponent;

