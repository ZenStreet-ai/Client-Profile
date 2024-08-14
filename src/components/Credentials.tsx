import { Document, GraduateCap, People } from "@/assets/icons";
import { Calendar } from "lucide-react";
import React from "react";

const credentials = [
  {
    icon: <GraduateCap />,
    title: "Ph.D. in Clinical Psychology - Harvard University",
  },
  {
    icon: <GraduateCap />,
    title: "M.A. in Counseling - University of California, Berkeley",
  },
  {
    icon: <Document />,
    title: "Licensed Professional Counselor (LPC) - State of DEF",
  },
  {
    icon: <Document />,
    title: "Certified Cognitive Behavioral Therapist (CBT)",
  },
  {
    icon: <People />,
    title: "Member, American Psychological Association (APA)",
  },
  {
    icon: <Calendar />,
    title: "10+ years of experience in individual and group therapy",
  },
];

const Credentials: React.FC = () => {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Credentials</h2>
      <ul className="space-y-4">
        {credentials.map((credential, index) => (
          <li key={index} className="flex items-start space-x-2">
            <span className="text-blue-500 text-2xl">{credential.icon}</span>
            <p className="text-gray-700">{credential.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Credentials;
