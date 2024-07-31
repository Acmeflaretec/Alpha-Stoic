import React from 'react';

interface Course {
  heading: string;
  text: string;
  price: string | number;
}

interface Workshop {
  bonuses: Course[];
}

interface BonusesProps {
  workshop: Workshop;
}

const Bonuses: React.FC<BonusesProps> = ({ workshop }) => {
  const { bonuses: courses } = workshop;

  const totalValue = courses.reduce((sum, course) => {
    const price = typeof course.price === 'string' ? parseFloat(course.price) : course.price;
    return sum + (isNaN(price) ? 0 : price);
  }, 0);

  return (
    <section className="py-10 bg-gray-100 text-center p-5">
      <h1 className="text-3xl font-bold mb-6">
        Get Access to BONUSES Worth ₹{totalValue.toLocaleString('en-IN')}/- FREE
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-left">
              <h2 className="text-2xl font-semibold text-[#3EB449] mb-2">
                {course.heading}
              </h2>
              <p className="text-gray-700 mb-2">
                {course.text}
              </p>
              <p className="text-xl font-bold text-black">
                ₹{(typeof course.price === 'string' ? parseFloat(course.price) : course.price).toLocaleString('en-IN')}/-
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
      </div>
    </section>
  );
};

export default Bonuses;