import Bonuses from "@/components/bonuses";
import EventPage from "@/components/eventmain";
import Faq from "@/components/faq";
import MeetYourMentor from "@/components/mentor";
import AttendeeSection from "@/components/recommend";
import WhatWellCover from "@/components/whatwillcover";
import WhyThisEvent from "@/components/whythis";


const eventDetails = ()=>{
 return(
   <>
     <EventPage/>
     <WhyThisEvent/>
     <AttendeeSection/>
     <WhatWellCover/>
     <Bonuses/>
     <MeetYourMentor/>
     <Faq/>
   </>
 );
};

export default eventDetails;