"use client";

import React from 'react';
import Countdown from 'react-countdown';

const EventPage = () => {
  const eventDate = new Date('2024-07-21T11:00:00');

  return (
    <div className="bg-white text-dark  flex flex-col items-center p-6 mt-20">
      
      <main className="flex flex-col items-center max-w-6xl w-full mt-12">
        <h1 className="text-4xl font-bold text-center leading-tight">
        Masterclass <span style={{ color: '#3EB449' }}>on Hidden Market Leaders</span>
        </h1>
        <p className="text-xl mt-4 text-center text-yellow-400">
        Build a One Crore Portfolio
        </p>
        
        <div className="mt-12  flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-yellow-400  p-6 flex flex-col items-center">
            <img src="https://backend.alphastoic.in/uploads/1720876099987-for%20web.jpg" alt="Pratik Chakraborty" className="  mb-4"/>
         
          </div>
          <div className="md:w-1/2 flex flex-col">
            <div className="text-2xl font-bold mb-6" style={{ color: '#3EB449' }}>
            A Foolproof System to Identify Hidden Market Leaders in the mid and small cap sectors.
            </div>
            <ul className="list-none space-y-4 mb-8">
              <li className="flex items-center">
                <span className=" mr-2" style={{ color: '#3EB449' }}>✓</span> Comprehensive Analysis of 15 High-Growth Stocks primed for extreme growth.
              </li>
              <li className="flex items-center">
                <span className=" mr-2" style={{ color: '#3EB449' }}>✓</span>Top-Down Approach to Identify Outperforming Sectors in the short term.
              </li>
            </ul>
            <div className="flex justify-between mb-8">
              <div className="text-center">
                <div className="text-lg font-bold">July 21, 2024</div>
                <div className="text-sm">11:00 AM</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold">3+ Hours</div>
                <div className="text-sm">Live Session</div>
              </div>
            </div>
            <button className=" text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition duration-300" style={{ backgroundColor: '#3EB449' }}>
            Masterclass on Hidden Market Leaders Now At Just Rs.99/- Only
            </button>
            {/* <p className="text-center mt-4 text-sm">*No Prior Experience Needed*</p> */}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Countdown 
            date={eventDate} 
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="flex justify-center space-x-4">
                {[
                  { label: 'DAYS', value: days },
                  { label: 'HOURS', value: hours },
                  { label: 'MIN', value: minutes },
                  { label: 'SEC', value: seconds }
                ].map(({ label, value }) => (
                  <div key={label} className="text-center">
                    <div className="text-4xl font-bold " style={{ color: '#3EB449' }}>{value.toString().padStart(2, '0')}</div>
                    <div className="text-sm">{label}</div>
                  </div>
                ))}
              </div>
            )}
          />
        </div>
      </main>
    </div>
  );
};

export default EventPage;

