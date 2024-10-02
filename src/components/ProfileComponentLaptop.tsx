import { InPerson, Phone } from "@/assets/icons";
import Available from "@/components/Available";
import Credentials from "@/components/Credentials";
import CustomWrapper from "@/components/CustomSectionComponent";
import Offers from "@/components/Offers";
import ProfileCard from "@/components/ProfileCardComponent";
import TestimonialWrapper, {
  TestimonialProps,
} from "@/components/TestimonialSection";
import { useState } from "react";
import Description from "./Description";
// import { ScrollArea } from "@/components/ui/scroll-area";

const testimonials: TestimonialProps[] = [
  {
    id: 1,
    quote:
      "Therapy helped me build self-esteem and confidence that I never thought possible.",
    author: "Anonymous",
  },
  {
    id: 2,
    quote:
      "I've learned valuable coping strategies that have significantly improved my daily life.",
    author: "J.D.",
  },
  {
    id: 3,
    quote:
      "The support I've received has been transformative. I feel like a new person.",
    author: "Sarah K.",
  },
  {
    id: 4,
    quote:
      "I've learned valuable coping strategies that have significantly improved my daily life.",
    author: "J.D.",
  },
  {
    id: 5,
    quote:
      "I've learned valuable coping strategies that have significantly improved my daily life.",
    author: "J.D.",
  },
  {
    id: 6,
    quote:
      "I've learned valuable coping strategies that have significantly improved my daily life.",
    author: "J.D.",
  },
];

const ProfileComponentLaptop = ({ params }: { params: { id: string }}) => {

  const aboutMeText = `Hello, I'm Swetha, a licensed therapist dedicated to guiding individuals through life's
    challenges with empathy and expertise. With over 10 years of experience, I specialize in helping
    clients manage anxiety, depression, and relationship issues through personalized, evidence-based
    practices.`;

  return (
    <div className="flex">
        {/* Sticky Left Part */}
        <div className="flex-shrink-0 sticky top-0 h-screen">
          <ProfileCard
            name="Swetha Varma"
            title="Consultant Clinical Psychologist"
            experience="10+ Years of experience"
            rate={1200}
            location="Block A2, Delhi"
            imageUrl="/Profile"
            id={params.id}
          />
        </div>
        <div className="ml-8 flex-1 mt-[2rem] space-y-[48px]">
          <CustomWrapper title="About me">
            <Description aboutMeText={aboutMeText} />
          </CustomWrapper>
          <Credentials />
          <div className="w-[325px] h-[187px] text-[24px] space-y-[24px]">
            <h2 className="leading-9 h-[36px] w-[325px]">Available on</h2>
            <div className="flex w-[290px] space-x-[64px]">
              <Available label="In-person" icon={<InPerson />} />
              <Available label="Video/Voice Call" icon={<Phone />} />
            </div>
          </div>
          <Offers />
          <div className="xl:flex space-x-[212px]">
            <CustomWrapper title="I am from">
              <p className="text-[#8C8C8C]">Chennai , India</p>
            </CustomWrapper>
            <CustomWrapper title="Languages">
              <p className="text-[#8C8C8C]">English, Hindi</p>
            </CustomWrapper>
          </div>
          {/* <CustomWrapper title="Client Testimonials"> */}
          {/* <div className="w-[227px] h-[36px] flex"> */}
          <TestimonialWrapper testimonials={testimonials} />
          {/* </div> */}
          {/* </CustomWrapper> */}
        </div>
        {/* </ScrollArea> */}
      </div>
  );
};

export default ProfileComponentLaptop;
