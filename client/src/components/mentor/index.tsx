// components/MeetYourMentor.js
const MeetYourMentor = () => {
    const mentor = {
      image: 'mentor.png', 
      name: 'Krishna Kumar Mavila',
      qualifications: [
        'Founder and CEO of Alpha Stoic Finserve',
        'Renowned author with two bestselling books on trading and investing.',
        'NISM Certified Research Analyst',
        'Seasoned Market Veteran with over a decade of experience in capital markets.',
        'Expert in automated options trading',
        'AMFI Registered mutual fund distributor',
        'An alumnus of the esteemed Van Thorpe University in the United States'
      ],
    };
  
    return (
      <section className="py-10 bg-gray-50 p-5">
        {/* <h1 className="text-3xl font-bold text-[#3EB449] text-center mb-10"> */}
        <h1 className="text-3xl font-bold text-center mb-10">
        About The Mentor
        </h1>
        <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2 text-left md:pl-6">
            <h2 className="text-2xl font-semibold text-[#3EB449] mb-4">
              {mentor.name}
            </h2>
            <ul className="text-gray-700 list-disc  space-y-2">
              {mentor.qualifications.map((qualification, index) => (
                <li key={index}>
                  {qualification}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default MeetYourMentor;
  