import { Document, GraduateCap, People } from "@/assets/icons";
import { Calendar } from "lucide-react";

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
		icon: <Document />,
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
		<div className="p-6 max-w-lg mx-auto">
			<h2 className="text-2xl font-bold mb-4">Credentials</h2>
			<ul className="space-y-4">
				{credentials.map((credential) => (
					<li key={credential.id} className="flex items-start space-x-2">
						<span className="text-blue-500 text-2xl">{credential.icon}</span>
						<p className="text-gray-700">{credential.title}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Credentials;
