import { FC } from "react";
import { FaRegSnowflake } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { CircularProgressBars } from "../CircularProgressBars/CircularProgressBars";

export const ProductStatsIndicators: FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl sm:text-[32px]">Product Statistics Indicators</h1>

      <div className="flex flex-col gap-8">
        <div className="py-6 px-4 bg-white shadow-xl rounded-xl">
          <CircularProgressBars />

          <div>
            <div className="flex items-center justify-between flex-wrap gap-y-2 gap-x-4">
              <div className="flex items-center gap-2.5">
                <FaRegSnowflake className="size-10 text-blue-300" />
                <p className="text-primary-dark text-xl">Cooling Process</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[32px] text-primary-dark">01 - 126</span>
                <FaArrowRight className="text-primary-dark" />
              </div>
            </div>

            <div className="my-4 w-full h-[1px] bg-primary-dark" />

            <p className="text-lg text-primary-dark">
              Smooth cooling of the reactor from 1000°C to room temperature in an inert atmosphere
              prevents defects, stabilizes the graphene structure, and maintains its high quality.
            </p>
          </div>
        </div>

        <div className="w-full min-h-[400px] bg-blue-400 rounded-xl" />
      </div>
    </div>
  );
};
