import React from 'react';



const WhatWellCover = ({workshop}) => {
  return (
    <div className="bg-white text-black flex flex-col items-center p-6">
      <div className="max-w-6xl w-full">
        <h2 className="text-2xl font-bold text-center mb-8">
          WHAT WE&apos;LL COVER INSIDE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshop?.coverInside?.map((topic, index) => (
            <div key={index} className="text-white p-6 rounded-lg shadow-lg flex flex-col items-center" style={{ backgroundColor: '#3EB449' }}>
              {/* <div className="text-4xl mb-4">{topic.icon}</div> */}
              <h3 className="text-xl font-semibold mb-2">{topic?.heading}</h3>
              <p className="text-center">{topic?.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWellCover;
