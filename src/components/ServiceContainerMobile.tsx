import type React from "react";

type ServiceCardMobileProps = {
	title: string;
	items: string[];
	price: string;
};

const ServiceCardMobile: React.FC<ServiceCardMobileProps> = ({
	title,
	items,
	price,
}) => {
	return (
		<div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white rounded-lg shadow-lg p-4 mb-4 w-full">
			<div className="text-lg font-semibold">{title}</div>
			<ul className="mt-3 space-y-1 px-5">
				{items.map((item) => (
					<li key={item} className="text-sm list-disc">
						{item}
					</li>
				))}
			</ul>
			<div className="mt-4 text-right font-bold text-white">
				Starts at {price}
			</div>
		</div>
	);
};

const ServiceContainerMobile: React.FC = () => {
	const services = [
		{
			id: 1,
			title: "Individual Therapy",
			items: [
				"Joint Evaluation",
				"Communication Exercises",
				"Conflict Resolution",
				"Goal Setting",
				"Follow up plan",
			],
			price: "₹1,200",
		},
	];

	return (
		<div className="px-4 py-6">
			{services.map((service) => (
				<ServiceCardMobile key={service.id} {...service} />
			))}
		</div>
	);
};

export default ServiceContainerMobile;
