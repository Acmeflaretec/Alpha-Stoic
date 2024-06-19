import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Fonter = () => {
  return (
    <>
    <hr />
    <section id="fonter" className="bg-gray-light dark:bg-bg-color-dark pt-16 md:pt-20 lg:pt-28">
      <div className="container">
      <h3 className="mb-10 text-center text-xl text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          Founders Profile

                </h3>
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Krishna Kumar Mavila"
                paragraph="Founder, CEO"
                mb="20px"
              />
              <SectionTitle
                title=""
                paragraph='Krishna Mavila is a renowned author and Personal finance consultant, best known for his bestselling books, "Cracking the Secrets of Stock-market Investing" and "Better You For You." As an NISM-certified research analyst, Krishna has carved out a successful career as a full-time trader and investor. He is the visionary founder and CEO of Alpha Stoic, a financial growth partner firm specializing in stock market trading and cryptocurrency investments.  '
                mb="20px"
              />
              <SectionTitle
                title=""
                paragraph="In addition to leading Alpha Stoic, Krishna founded the Alpha Stoic Trading Hub, a dynamic community and educational initiative where he mentors aspiring traders and investors. His profound mission is to promote financial freedom, imparting critical financial knowledge and guidance to those eager to enhance their financial futures. Krishna's unwavering dedication to financial education and empowerment highlights his belief in the transformative power of financial independence and his commitment to supporting others on their journey to a brighter, more secure tomorrow."
                mb="20px"
              />
              
              
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/Untitled presentation.pdf-image-000.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/Untitled presentation.pdf-image-000.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Fonter
