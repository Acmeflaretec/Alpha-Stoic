// components/Faq.js
const Faq = () => {
    const faqs = [
      {
        question: 'What is the purpose of this course?',
        answer: 'The purpose of this course is to provide comprehensive knowledge and skills in AI and Machine Learning, helping you become an expert in the field.',
      },
      {
        question: 'How long does the course last?',
        answer: 'The course lasts for 12 weeks, with new modules released every week.',
      },
      {
        question: 'Are there any prerequisites?',
        answer: 'Basic knowledge of programming and statistics is recommended, but not mandatory. We provide all the foundational knowledge you need.',
      },
      {
        question: 'What kind of support will I receive?',
        answer: 'You will have access to a dedicated support team, community forums, and live Q&A sessions with the mentor.',
      },
      {
        question: 'Will I receive a certificate upon completion?',
        answer: 'Yes, you will receive a certificate of completion once you successfully finish the course and all assignments.',
      },
    ];
  
    return (
      <section className="py-10 bg-white">
        <h1 className="text-3xl font-bold text-[#3EB449] text-center mb-10">
          Frequently Asked Questions
        </h1>
        <div className="max-w-5xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-[#3EB449] mb-2">
                {faq.question}
              </h2>
              <p className="text-gray-700">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Faq;
  