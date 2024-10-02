
import Profile from "@/components/profile";
import  {
  TestimonialProps,
} from "@/components/TestimonialSection";

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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sweta Verma - Zenstreet",
  description:
    "Hello, I'm Swetha, a licensed therapist dedicated to guiding individuals through life's challenges with empathy and expertise",
};

const ProfilePage = ({ params }: { params: { id: string } }) => {
  return (
    <Profile params={params}/>
  )
};

export default ProfilePage;
