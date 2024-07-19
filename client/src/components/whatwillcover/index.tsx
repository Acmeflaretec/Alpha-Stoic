import React from 'react';

const topics = [
  {
    title: "Identifying Market Leaders",
    description: "Learn to spot potential market leaders before they become mainstream.",
  },
  {
    title: "Analyzing Market Trends",
    description: "Master the strategies for analyzing market trends.",
  },
  {
    title: "Advanced Stock Analysis",
    description: "Utilize advanced tools for comprehensive stock analysis.",
  },
  {
    title: "High-Growth Stocks",
    description: "Build a portfolio with high-growth potential stocks.",
  },
  {
    title: "Long-Term Investment",
    description: "Learn techniques for successful long-term investments.",
  },
  {
    title: "Successful Case Studies",
    description: "Analyze case studies of successful market leaders.",
  },
];

const WhatWellCover = () => {
  return (
    <div className="bg-white text-black flex flex-col items-center p-6">
      <div className="max-w-6xl w-full">
        <h2 className="text-2xl font-bold text-center mb-8" style={{ color: '#3EB449' }}>
          WHAT WE&apos;LL COVER INSIDE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div key={index} className="text-white p-6 rounded-lg shadow-lg flex flex-col items-center" style={{ backgroundColor: '#3EB449' }}>
              {/* <div className="text-4xl mb-4">{topic.icon}</div> */}
              <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
              <p className="text-center">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWellCover;
