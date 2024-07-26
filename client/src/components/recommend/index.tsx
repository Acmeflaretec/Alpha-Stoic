import Image from 'next/image';

const AttendeeSection = () => {
  const attendeeTypes = [
    {
      title: "Beginners",
      description: " Learn the fundamentals of stock picking and discover a powerful framework to identify promising companies with the potential for breakthrough success.",
      icon: "/beginner-icon.png"
    },
    {
      title: "Intermediate Investors",
      description: " Take your skills to the next level. Learn simple hacks to find hidden gems before the crowd catches on and master the art of company analysis to build a rock-solid investment portfolio.",
      icon: "/trader-icon.png"
    },
    {
      title: "Advanced Investors",
      description: " Refine your edge. Gain insights into proven supply and demand zone analysis for strategic entry and exit points and develop an unshakeable belief system to conquer market volatility.",
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
              <h3 className="text-xl font-bold mb-4 text-white">
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