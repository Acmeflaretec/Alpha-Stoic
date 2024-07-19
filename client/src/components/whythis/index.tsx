import React from 'react';

const reasons = [
  "Uncover Hidden Market Leaders Before They Become Mainstream",
  "Learn Strategies to Identify Undervalued Stocks",
  "Gain Insights from Industry Experts",
  "Boost Your Portfolio with High-Growth Potential Investments",
  "Leverage Cutting-Edge Market Analysis Tools",
  "Master the Art of Long-Term Investing"
];

const WhyThisEvent = () => {
  return (
    <div className="bg-white text-black flex flex-col items-center p-6">
      <div className="max-w-6xl w-full">
        <h2 className="text-2xl font-bold text-center mb-8" style={{ color: '#3EB449' }}>WHY ATTEND THIS MASTERCLASS?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className=" text-white p-6 rounded-lg shadow-lg flex items-center space-x-4" style={{ backgroundColor: '#3EB449' }}>
              <div className="bg-white rounded-full p-2">
                <svg className="w-6 h-6 " style={{ color: '#3EB449' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p>{reason}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className=" text-white font-bold py-2 px-4 rounded hover:bg-green-600" style={{ backgroundColor: '#3EB449' }}>
            Unlock Market Secrets Now At Just Rs.99/-
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyThisEvent;
