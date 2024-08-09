import React from "react";

type Props = {
  icon: React.ReactNode;
  label: string;
};

const Available = (props: Props) => {
  const { icon, label } = props;
  return (
    <div className="flex flex-col items-center w-full sm:w-auto">
      <div className="p-4 bg-blue-100 rounded-lg">
        <div className="">{icon}</div>
      </div>
      <p className="mt-1 block text-gray-600 text-xs truncate">
        {label}
      </p>
    </div>
  );
};

export default Available;
