"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Workshops from './Workshop';
import axios from 'axios';

const BlogDetailsPage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/events`);
    setEvents(response.data);
  };

  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <div className="text-center">
                  <h3>Stay updated on our latest</h3 >
                  <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    Workshops and Events
                  </h2>
                </div>

                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Alpha Stoic Finserve hosts various workshops and events, providing valuable insights and knowledge in the field of finance and investment. The company conducts sessions at schools, colleges, and organizational levels, aiming to educate and empower individuals on financial matters.
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/workshops/Images to update.pdf-image-004.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Personal Finance and Importance of Financial Education
                  </h3>
                  <ul className="mb-10 list-inside list-disc">
                    <li className="mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      <strong> General public, students, working professionals </strong>
                    </li>
                    <p className="mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      This workshop focuses on the significance of personal finance management and the role of financial education in building a secure and prosperous future. It covers essential topics such as budgeting, savings, debt management, and long-term financial planning.
                    </p>
                  </ul>

                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Stock Market Simplified: When and How to Invest?
                  </h3>
                  <ul className="mb-10 list-inside list-disc">
                    <li className="mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      <strong> Aspiring investors, beginners in stock market investing </strong>
                    </li>
                    <p className="mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      This session provides a simplified approach to understanding the stock market, essential investment principles, and strategic entry points for individuals looking to start their investment journey. Topics may include stock selection, risk management, and market analysis.
                    </p>
                  </ul>

                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Options and Algorithmic Trading
                  </h3>
                  <ul className="mb-10 list-inside list-disc">
                    <li className="mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      <strong>  Investors, traders, and individuals interested in options and algorithmic trading </strong>
                    </li>
                    <p className="mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      This event delves into the intricacies of options trading and algorithmic strategies, offering insights on advanced trading techniques, risk mitigation, and systematic trading approaches in dynamic market conditions.
                    </p>
                  </ul>

                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    A-Z on Investing in Crypto and Digital Assets
                  </h3>
                  <ul className="mb-10 list-inside list-disc">
                    <li className="mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      <strong> Crypto enthusiasts, investors exploring digital assets </strong>
                    </li>
                    <p className="mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      This workshop provides a comprehensive understanding of cryptocurrency investments and digital assets. It covers the fundamentals of blockchain technology, investment opportunities, risk factors, and regulatory insights in the evolving digital asset landscape.
                    </p>
                  </ul>

                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-white text-base font-medium italic mb-5">
                      These workshops and events serve as educational platforms for individuals seeking valuable knowledge, guidance, and practical insights into the world of finance and investment. Participants benefit from the expertise of Alpha Stoic&apos;s team and gain valuable perspectives on diverse financial topics.
                    </p>
                    <p className="text-center text-white text-base font-medium italic">
                      &quot;If you&apos;d like more details on any specific workshop or event, or if there are additional workshops to be included, feel free to let me know!&quot;
                    </p>
                    <span className="absolute left-0 top-0 z-[-1]">
                      <svg
                        width="132"
                        height="109"
                        viewBox="0 0 132 109"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                          fill="url(#paint0_linear_111:606)"
                        />
                        <path
                          opacity="0.5"
                          d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                          fill="url(#paint1_linear_111:606)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_111:606"
                            x1="94.7523"
                            y1="82.0246"
                            x2="8.40951"
                            y2="52.0609"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_111:606"
                            x1="90.3206"
                            y1="58.4236"
                            x2="1.16149"
                            y2="50.8365"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute right-0 top-0 z-[-1]">
                      <svg
                        width="171"
                        height="150"
                        viewBox="0 0 171 150"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M-64.8626 -62.2633C-54.6161 -68.3514 -34.938 -62.7295 -25.5 -58.4098L8.61468 70.5977L-147.329 162.476L-169.233 71.3254C-169.667 69.4874 -171.002 63.718 -172.725 55.5589C-175.292 42.303 -179.439 22.1765 -181.883 9.68321C-184.326 -2.81009 -182.678 -10.1294 -181.708 -12.9842C-171.69 -49.7558 -74.6868 -56.0356 -64.8626 -62.2633Z"
                          fill="url(#paint0_linear_0:1)"
                        />
                        <path
                          opacity="0.5"
                          d="M-55.3954 -51.9206C-47.5761 -55.4402 -31.8098 -51.3033 -23.6725 -47.9904L7.98116 74.4824L-145.585 168.289L-166.054 78.4712C-166.436 76.8468 -167.537 72.1484 -168.973 65.4785C-171.623 53.1347 -175.849 34.9782 -178.217 23.0504C-180.586 11.1227 -179.097 4.34644 -178.263 1.64307C-170.684 -28.9335 -63.0013 -34.6136 -55.3954 -51.9206Z"
                          fill="url(#paint1_linear_0:1)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_0:1"
                            x1="-58.0981"
                            y1="-17.2445"
                            x2="-207.967"
                            y2="99.8211"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_0:1"
                            x1="-55.1512"
                            y1="7.66841"
                            x2="-202.005"
                            y2="100.961"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <Workshops workshops={events} />
    </>
  );
};

export default BlogDetailsPage;
