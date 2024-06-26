import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28" style={{ backgroundColor: '#3EB449' }}>
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 aspect-[1/1] max-w-[400px] ">
              <Image
                src="/images/about/Images to update.pdf-image-001.jpg"
                alt="about image"
                layout="fill"
                objectFit="cover"
                className="drop-shadow-three dark:hidden dark:drop-shadow-none rounded-xl"
              />
              <Image
                src="/images/about/Images to update.pdf-image-001.jpg"
                alt="about image"
                layout="fill"
                objectFit="cover"
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none rounded-xl"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-3 text-3xl text-black dark:text-white">Vision</h3>
                <p className="text-base leading-relaxed sm:text-md sm:leading-relaxed">
                  To transform the financial landscape of the nation by equipping every individual with the knowledge and support they need to make informed financial decisions, creating a future of sustainable wealth and prosperity for all.
                </p>
              </div>
              <div className="mb-2">
                <h3 className="mb-4 text-3xl text-black dark:text-white">Mission</h3>
                <p className="text-base leading-relaxed sm:text-md sm:leading-relaxed">
                  At Alpha Stoic Finserve, our mission is to provide accessible, high-quality financial education and personalized services to empower individuals to take control of their finances. We guide our clients toward smart planning, strategic investing, and long-term wealth creation, fostering a secure and prosperous financial future for every person we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutSectionTwo;
