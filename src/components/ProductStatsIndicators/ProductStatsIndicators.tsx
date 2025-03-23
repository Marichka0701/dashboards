import { FC } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IProcessStep } from "../../pages/DashboardPage/DashboardPage";
import { CircularProgressBars } from "../CircularProgressBars/CircularProgressBars";

interface Props {
  step: IProcessStep;
}

export const ProductStatsIndicators: FC<Props> = ({ step }) => {
  const { title, Icon, iconClassname, code, description } = step;

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl sm:text-[32px]">Product Statistics Indicators</h1>

      <div className="flex flex-col gap-8">
        <div className="py-6 px-4 bg-white shadow-xl rounded-xl">
          <CircularProgressBars />

          <div className="min-h-[135px]">
            <div className="flex items-center justify-between flex-wrap gap-y-2 gap-x-4">
              <div className="flex items-center gap-2.5">
                <Icon className={iconClassname} />
                <p className="text-primary-dark text-xl">{title}</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[32px] text-primary-dark">{code}</span>
                <FaArrowRight className="text-primary-dark" />
              </div>
            </div>

            <div className="my-4 w-full h-[1px] bg-primary-dark" />

            <p className="text-lg text-primary-dark">{description}</p>
          </div>
        </div>

        <video className="w-full h-auto" controls>
          <source src="/process-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
