import Image from 'next/image';

const AttendeeSection = () => {
  const attendeeTypes = [
    {
      title: "You're A Beginner Wanting To Kickstart Your Financial Journey & Build Wealth",
      description: "From students to entrepreneurs, discover how AI can empower you to build wealth and secure financial freedom without prior experience.",
      icon: "/beginner-icon.png"
    },
    {
      title: "You're A Trader Wanting To Skyrocket Your Success & Multiply Your Profits",
      description: "Mid-level traders, investors, and market practitioners, dive into the world of AI to revolutionize your strategies and maximize your profits like never before.",
      icon: "/trader-icon.png"
    },
    {
      title: "You're An Experienced Trader Ready To Master The Market & Stay Ahead Of The Curve",
      description: "Seasoned professionals and intra-day traders, harness the full potential of AI to scale your strategies 10x and discover further edge to dominate the market.",
      icon: "/expert-icon.png"
    }
  ];

  return (
    <div className="bg-white text-dark py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* <div className="text-green-500 text-3xl mb-2">★★★★★</div> */}
          <h2 className="text-4xl font-bold mb-4">5,500+ PAST ATTENDEES...</h2>
          <p className="text-xl " style={{ color: '#3EB449' }}>
            Recommend You To Attend This Workshop, If You Fit Any Of The Following ↓
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {attendeeTypes.map((type, index) => (
            <div key={index} className=" rounded-lg p-6 text-center" style={{ backgroundColor: '#3EB449' }}>
              {/* <div className="mb-4">
                <Image src={type.icon} alt={`Icon ${index + 1}`} width={80} height={80} />
              </div> */}
              <h3 className="text-xl font-bold mb-4">
                {type.title.split(' ').map((word, i) => 
                  word.toLowerCase() === 'beginner' || 
                  word.toLowerCase() === 'trader' || 
                  word.toLowerCase() === 'experienced' ? 
                    <span key={i} className="text-white">{word} </span> : 
                    word + ' '
                )}
              </h3>
              <p className="text-green-100">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendeeSection;