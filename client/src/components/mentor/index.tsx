// components/MeetYourMentor.js
const MeetYourMentor = () => {
    const mentor = {
      image: 'https://backend.alphastoic.in/uploads/1720876099987-for%20web.jpg', // Replace with actual image URL
      name: 'John Doe',
      qualifications: [
        'PhD in Computer Science',
        '10+ years of industry experience',
        'Published 50+ research papers',
        'Expert in AI and Machine Learning',
      ],
    };
  
    return (
      <section className="py-10 bg-gray-50">
        <h1 className="text-3xl font-bold text-[#3EB449] text-center mb-10">
          Meet Your Mentor
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
            <ul className="text-gray-700 list-disc list-inside space-y-2">
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
  