// Profile.tsx
"use client"; // Mark this file as a client component

import ProfileComponentLaptop from "@/components/ProfileComponentLaptop";
import ProfileComponentMobile from "@/components/ProfileComponentMobile";
import useMediaQuery from "@/hooks/useMediaQuery";


const Profile = ({ params }: { params: { id: string } }) => {
  const isLaptop = useMediaQuery("(min-width: 768px)");
  
  return (
    <div>
      {isLaptop ? (
        <ProfileComponentLaptop params={params} />
      ) : (
        <ProfileComponentMobile params={params} />
      )}
    </div>
  );
};

export default Profile;
