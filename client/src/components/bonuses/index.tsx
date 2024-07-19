// components/Bonuses.js
const Bonuses = () => {
    const courses = [
      {
        image: 'https://backend.alphastoic.in/uploads/1720876099987-for%20web.jpg',
        title: 'Course Title 1',
        description: 'This is a brief description of the first course. It highlights the main features and benefits.',
        value: 9756,
      },
      {
        image: 'https://backend.alphastoic.in/uploads/1720876099987-for%20web.jpg',
        title: 'Course Title 2',
        description: 'This is a brief description of the second course. It highlights the main features and benefits.',
        value: 7500,
      },
      {
        image: 'https://backend.alphastoic.in/uploads/1720876099987-for%20web.jpg',
        title: 'Course Title 3',
        description: 'This is a brief description of the third course. It highlights the main features and benefits.',
        value: 5000,
      },
      // Add more courses as needed
    ];
  
    return (
      <section className="py-10 bg-gray-100 text-center">
        <h1 className="text-3xl font-bold text-[#3EB449] mb-6">
          Get Access to BONUSES Worth Rs.9756/- Absolutely FREE
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="text-left">
                <h2 className="text-2xl font-semibold text-[#3EB449] mb-2">
                  {course.title}
                </h2>
                <p className="text-gray-700 mb-2">
                  {course.description}
                </p>
                <p className="text-xl font-bold text-[#3EB449]">
                  Value: Rs.{course.value}/-
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Bonuses;
  