import type React from "react";

type Props = {
  icon?: React.ReactNode;
  label?: string;
};

const Available = (props: Props) => {
  const { icon, label } = props;
  return (
    <div className="flex flex-col items-center sm:w-auto space-y-[6px] w-[124px] h-[127px]">
      <div className="flex items-center justify-center p-4 bg-[#C6E3FF] rounded-lg w-[102px] h-[102px] sm:w-[74.92px] sm:h-[74.92px]">
        <div>{icon}</div>
      </div>
      <p className="mt-1 block text-[#516E8A] text-[16px] leading-5 text-xs truncate">
        {label}
      </p>
    </div>
  );
};

export default Available;
