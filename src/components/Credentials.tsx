import {
  Calendar,
  Certificate,
  Document,
  GraduateCap,
  People,
} from "@/assets/icons";

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

const Credentials = () => {
  return (
    <div>
      <h2 className="leading-5 text-[24px]">Credentials</h2>
      <ul className="space-y-4 pt-4">
        {credentials.map((credential) => (
          <li key={credential.id} className="flex items-start space-x-[14px]">
            <span className="text-[#516E8A] text-[18px] leading-5">
              {credential.icon}
            </span>
            <p className="text-[#516E8A]">{credential.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Credentials;
