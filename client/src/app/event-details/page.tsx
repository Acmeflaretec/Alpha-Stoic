// "use client";
// import Bonuses from "@/components/bonuses";
// import EventPage from "@/components/eventmain";
// // import Faq from "@/components/faq";
// import MeetYourMentor from "@/components/mentor";
// import AttendeeSection from "@/components/recommend";
// import WhatWellCover from "@/components/whatwillcover";
// import WhyThisEvent from "@/components/whythis";
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';


// const eventDetails = ()=>{
//   const router = useRouter();
//   const [workshop, setWorkshop] = useState<any>(null);
//   useEffect(() => {
//     if (router.query) {
//       setWorkshop(router.query);
//     }
//   }, [router.query]);

//  return(
//    <>
//      <EventPage/>
//      <WhyThisEvent/>
//      <AttendeeSection/>
//      <WhatWellCover/>
//      <Bonuses/>
//      <MeetYourMentor/>
//      {/* <Faq/> */}
//    </>
//  );
// };

// export default eventDetails;

"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Bonuses from "@/components/bonuses";
import EventPage from "@/components/eventmain";
import MeetYourMentor from "@/components/mentor";
import AttendeeSection from "@/components/recommend";
import WhatWellCover from "@/components/whatwillcover";
import WhyThisEvent from "@/components/whythis";

const EventDetails = () => {
  const searchParams = useSearchParams();
  const [workshop, setWorkshop] = useState<any>(null);
  const workshopId = searchParams.get('id'); 

  useEffect(() => {
    if (workshopId) {
      const fetchWorkshop = async () => {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/singleEvents/${workshopId}`);
          setWorkshop(response.data);
        } catch (error) {
          console.error('Error fetching workshop details:', error);
        }
      }; 
      fetchWorkshop();
    }
  }, [workshopId]);

  if (!workshop) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <EventPage workshop={workshop} />
      <WhyThisEvent />
      <AttendeeSection />
      <WhatWellCover />
      <Bonuses />
      <MeetYourMentor />
    </>
  );
};

export default EventDetails;

