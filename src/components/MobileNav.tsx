import { ArrowLeft, Share2 } from "lucide-react";

const MobileTopBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 w-full h-[48px] bg-white">
      <button>
        <ArrowLeft size={24} />
      </button>
      <button>
        <Share2 size={24} />
      </button>
    </div>
  );
};

export default MobileTopBar;
