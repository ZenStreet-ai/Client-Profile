import { useState } from "react";

type ServiceCardProps = {
  price: string;
  title: string;
  duration: string[];
  items: string[];
};

const ServiceCardLaptop = (props: ServiceCardProps) => {
  const { price, title, duration, items } = props;
  const [selectedTime, setSelectedTime] = useState<string>(duration[0]);

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white rounded-lg shadow-lg p-6 w-80">
      <div className="text-3xl font-bold">
        {price} <span className="text-xl font-normal">/ session</span>
      </div>
      <div className="flex justify-center gap-3 my-4">
        {duration.map((time) => (
          <div
            key={time}
            onClick={() => handleTimeClick(time)}
            onKeyUp={(e) => e.key === "Enter" && handleTimeClick(time)}
            onKeyDown={(e) => e.key === " " && handleTimeClick(time)}
            className={`py-1 px-3 rounded-full border cursor-pointer ${
              selectedTime === time ? "bg-white text-blue-700" : "border-white"
            }`}
          >
            {time}
          </div>
        ))}
      </div>
      <div className="text-xl font-semibold">{title}</div>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm">
            {item}
          </li>
        ))}
      </ul>
      <button
        className="mt-6 w-full bg-white text-blue-700 py-2 rounded-full font-bold hover:bg-blue-100 transition"
        type="submit"
      >
        Proceed
      </button>
    </div>
  );
};

const ServiceContainerLaptop = () => {
  const services = [
    {
      id: 1,
      price: "₹3,200",
      title: "Group Therapy",
      duration: ["45 min", "60 min", "90 min"],
      items: [
        "Joint Evaluation",
        "Communication Exercises",
        "Conflict Resolution",
        "Goal Setting",
        "Follow up plan",
      ],
    },
    {
      id: 2,
      price: "₹3,200",
      title: "Individual Therapy",
      duration: ["45 min", "60 min", "90 min"],
      items: [
        "Joint Evaluation",
        "Communication Exercises",
        "Conflict Resolution",
        "Goal Setting",
        "Follow up plan",
      ],
    },
    {
      id: 3,
      price: "₹3,200",
      title: "Couple Therapy",
      duration: ["45 min", "60 min", "90 min"],
      items: [
        "Joint Evaluation",
        "Communication Exercises",
        "Conflict Resolution",
        "Goal Setting",
        "Follow up plan",
      ],
    },
  ];

  return (
    <div className="flex justify-center gap-6 py-8">
      {services.map((service) => (
        <ServiceCardLaptop key={service.id} {...service} />
      ))}
    </div>
  );
};

export default ServiceContainerLaptop;
