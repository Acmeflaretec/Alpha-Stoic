import SectionTitle from "../Common/SectionTitle";
// import TeamMember from "./TeamMember"; 

const Team = () => {
  // Sample team member data
  const teamMembers = [
    {
      id: 1,
      name: "Shobhith Padmanabhan",
      position: "COO",
      image: "/images/team/Untitled presentation.pdf-image-001.jpg",
    },
    {
      id: 3,
      name: "Jinesh Kumar",
      position: "CFO",
      image: "/images/team/Untitled presentation.pdf-image-002.jpg",
    },
    {
      id: 2,
      name: "Akash Aramana",
      position: "Chief strategist",
      image: "/images/team/Untitled presentation.pdf-image-003.jpg",
    },
    {
      id: 1,
      name: "Nikhil NK",
      position: "Head of Research",
      image: "/images/team/Untitled presentation.pdf-image-004.jpg",
    },
    {
      id: 3,
      name: "Gautham Krishna",
      position: "Research Analyst",
      image: "/images/team/Untitled presentation.pdf-image-005.jpg",
    },
    {
      id: 2,
      name: "Arjun",
      position: "Research Analyst",
      image: "/images/team/Untitled presentation.pdf-image-006.jpg",
    },
  ];

  return (
    <section id="team" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Core Team"
          paragraph="Expert professionals driving financial empowerment through research, strategy, and mentorship at Alpha Stoic Finserve."
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div className="flex flex-col items-center bg-gray-light dark:bg-bg-color-dark">
              <img src={member.image} alt={member.name} className="mb-4" />
              <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-5">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
