import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Share2 } from "lucide-react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { Button } from "./ui/button";
import ShareModal from "./ShareModal";
import { redirect } from "next/navigation";
import ProfileCardButton from "./ProfileCardButton";

interface ProfileCardProps {
  name: string;
  title: string;
  experience: string;
  rate: number;
  location: string;
  imageUrl: string;
  id: string;
}

const ProfileCard = ({
  name,
  title,
  experience,
  rate,
  location,
  imageUrl,
  id,
}: ProfileCardProps) => {
  return (
    <Card className="max-w-xl mx-auto w-[571px] h-[1020px] bg-[#1F9FE6] shadow-lg overflow-hidden relative">
      <CardContent className="bg-white rounded-[16px] p-6 mt-[5rem] w-[350px] pt-[0] pr-[20px] pb-[2rem] pl-[20px] mx-auto relative">
        <ShareModal
          triggerComponent={
            <button className="absolute top-4 right-4 bg-white rounded-full p-2">
              <Share2 className="text-blue-500" size={20} />
            </button>
          }
        />
        <div className="flex flex-col items-center text-center gap-1">
          <Image
            src={"/Profile.png"}
            alt={name}
            width={238}
            height={238}
            className="border-4 border-white mt-10 mb-4 rounded-[26px] w-[12rem] h-[12rem]"
          />
          <h2 className="text-xl font-semibold flex items-center justify-center">
            {name}
            <span className="ml-1 text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 mt-0">{title}</p>
          <p className="text-sm text-gray-500 mt-1">{experience}</p>
          <p className="text-sm font-semibold mt-1">
            Starts at <span className="text-lg">{rate}</span>/Session
          </p>
          <div className="flex items-center justify-center text-[#7F7F7F] mt-1">
            <MapPin size={16} className="mr-1 text-[16px] leading-5" />
            <p className="text-sm">{location}</p>
          </div>
        </div>
      </CardContent>
      <ProfileCardButton id={id} />
    </Card>
  );
};

export default ProfileCard;
