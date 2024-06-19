"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 ">
      <div className="container">
        {/* <SectionTitle
          title="Community"
          paragraph=""
          center
          width="665px"
        /> */}
        <Breadcrumb
          pageName="Community"
          subHead="Alpha Stoic premium Community membership"
          description="Join the Alpha Stoic community to build sustainable, long-term wealth securely. Gain exclusive 
access to expert insights, market strategies, and real-time support tailored to elevate your 
financial journey.
"
        />
        <div className="mb-10 w-full overflow-hidden rounded-lg">
          <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
            <Image
              src="/images/community/Images to update.pdf-image-005.jpg"
              alt="image"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div> */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-2">
          <PricingBox
            packageName="Indian Stock Market Community"
            price={"1999"}
            subtitle="Join our premium Indian stock market community for a comprehensive trading experience. Gain 
exclusive insights and real-time support to elevate your market strategies"
          >
            <OfferList text="Rs.1999/- for 6 months" status="active" />
            <OfferList text="Detailed market data" status="active" />
            <OfferList text="In-depth equity analysis" status="active" />
            <OfferList text="Timely entry and exit strategies" status="active" />
            <OfferList text="Real-time market timing support" status="active" />
            <OfferList text="Expert insights and updates" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Crypto and Digital Asset Community"
            price={"6999"}
            subtitle="Become a part of our elite crypto and digital asset community. Get unparalleled support and 
information to optimize your digital investments."
          >
            <OfferList text="Rs.6999/- for 6 months)" status="active" />
            <OfferList text="Entry and exit points guidance" status="active" />
            <OfferList text="Detailed technical analysis" status="active" />
            <OfferList text="Updates on crypto, NFTs, and more" status="active" />
            <OfferList text="Expert support and advice" status="active" />
            <OfferList text="Comprehensive market insights" status="active" />
          </PricingBox>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
