import { Calendar, Certificate, Document, GraduateCap, InPerson, People, Phone } from "@/assets/icons";
import Image from "next/image";
import { useState } from "react";
import Available from "./Available";
import OffersMobile from "./OffersMobile";
import TestimonialWrapperMobile from "./TestimonialMobileSection";
import { TestimonialProps } from "./TestimonialSection";

const credentials = [
  {
    id: 1,
    icon: <GraduateCap />,
    title: "Ph.D. in Clinical Psychology - Harvard University",
  },
  {
    id: 2,
    icon: <GraduateCap />,
    title: "M.A. in Counseling - University of California, Berkeley",
  },
  {
    id: 3,
    icon: <Document />,
    title: "Licensed Professional Counselor (LPC) - State of DEF",
  },
  {
    id: 4,
    icon: <Certificate />,
    title: "Certified Cognitive Behavioral Therapist (CBT)",
  },
  {
    id: 5,
    icon: <People />,
    title: "Member, American Psychological Association (APA)",
  },
  {
    id: 6,
    icon: <Calendar />,
    title: "10+ years of experience in individual and group therapy",
  },
];

const testimonials: TestimonialProps[] = [
  {
    id: 1,
    quote: "Therapy helped me build self-esteem and confidence that I never thought possible.",
    author: "Anonymous"
  },
  {
    id: 2,
    quote: "I've learned valuable coping strategies that have significantly improved my daily life.",
    author: "J.D."
  },
  {
    id: 3,
    quote: "The support I've received has been transformative. I feel like a new person.",
    author: "Sarah K."
  },
  {
    id: 4,
    quote: "I've learned valuable coping strategies that have significantly improved my daily life.",
    author: "J.D."
  },
  {
    id: 5,
    quote: "I've learned valuable coping strategies that have significantly improved my daily life.",
    author: "J.D."
  },
  {
    id: 6,
    quote: "I've learned valuable coping strategies that have significantly improved my daily life.",
    author: "J.D."
  },
];

const ProfileComponentMobile = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const aboutMeText = `Hello, I'm Swetha, a licensed therapist dedicated to guiding individuals through life's
    challenges with empathy and expertise. With over 10 years of experience, I specialize in helping
    clients manage anxiety, depression, and relationship issues through personalized, evidence-based
    practices.`;

  const truncatedText = aboutMeText.length > 350 ? aboutMeText.substring(0, 350) + '...' : aboutMeText;
  const shouldShowReadLess = aboutMeText.length > 350;
  return (
    <div className="space-y-6 gap-y-[48px]">
      <div className="block md:hidden w-full p-6 bg-[#1F9FE6] shadow-md text-center space-y-1">
        <Image
          src={"/Profile.png"}
          alt="Profile"
          width={130}
          height={130}
          className="rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl text-white">Swetha Varma</h2>
        <p className="text-white text-[10px]">Consultant Clinical Psychologist</p>
        <p className="mt-2 text-[16px] text-white">4+ Years of experience</p>
        <p className="text-white text-[14px] mt-2">₹1,200 / session</p>
        <p className="text-[12px] text-white">Block A2, Delhi</p>
      </div>
      <div className="flex-1 space-y-[8px] mx-5">
        <div className="w-full h-[107px]">
          <p className="text-[16px] leading-3 w-full h-[19px]">About Me</p>
          <p className="text-[#787B7E] text-[12px] leading-4 w-full">
            {isExpanded ? aboutMeText : truncatedText}
            {shouldShowReadLess && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-500 ml-2"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            )}
          </p>
        </div>
        <div>
          <h2 className="leading-5 text-[16x]">Credentials</h2>
          <ul className="space-y-4 pt-4">
            {credentials.map((credential) => (
              <li key={credential.id} className="flex items-start space-x-[14px]">
                <span className="text-[#516E8A] text-[12px] leading-5">{credential.icon}</span>
                <p className="text-[#516E8A] text-[12px]">{credential.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[325px] h-[157px] text-[24px] py-3">
          <h2 className="leading-5 h-[26px] w-[325px] text-[14px]">Available on</h2>
          <div className="flex w-[290px] space-x-[64px]">
            <Available label="In-person" icon={<InPerson />} />
            <Available label="Video/Voice Call" icon={<Phone />} />
          </div>
        </div>
        <OffersMobile />
        <h2 className="text-[14px] leading-5">I am from</h2>
        <p className="text-[#8C8C8C]">Chennai , India</p>
        <h2 className="text-[14px] pt-3 leading-5">I am from</h2>
        <p className="text-[#8C8C8C]">English, Hindi</p>
        <TestimonialWrapperMobile testimonials={testimonials} />
      </div>
    </div>
  );
};


export default ProfileComponentMobile;