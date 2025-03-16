import { FC } from "react";
import { FaArrowRight } from "react-icons/fa6";

const ProcessCard: FC = () => {
  return (
    <div className="bg-white p-4 shadow-xl rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          icon
          <p className="text-black text-xl">Substrate Preparation</p>
        </div>

        <div className="flex items-center gap-4">
          <span>01 - 122</span>
          <FaArrowRight className="text-black" />
        </div>
      </div>

      <div className="my-3 w-full h-[1px] bg-black" />

      <p className="text-black text-lg">
        Select and cut a copper or nickel substrate for graphene growth.
      </p>
    </div>
  );
};

export default ProcessCard;
