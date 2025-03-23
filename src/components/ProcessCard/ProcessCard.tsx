import { FC } from "react";
import { IconType } from "react-icons";
import { FaArrowRight } from "react-icons/fa6";

interface Props {
  title: string;
  Icon: IconType;
  iconClassname?: string;
  code: string;
  description: string;
  onStepClick: () => void;
}

export const ProcessCard: FC<Props> = ({
  title,
  Icon,
  iconClassname,
  code,
  description,
  onStepClick,
}) => {
  return (
    <div className="bg-white p-4 shadow-xl rounded-xl">
      <div className="flex items-center justify-between flex-wrap gap-y-2 gap-x-4">
        <div className="flex items-center gap-2.5">
          <Icon className={iconClassname} />
          <p className="text-primary-dark text-xl">{title}</p>
        </div>

        <div className="flex items-center gap-4">
          <span>{code}</span>
          <button onClick={onStepClick} className="cursor-pointer">
            <FaArrowRight className="text-primary-dark" />
          </button>
        </div>
      </div>

      <div className="my-3 w-full h-[1px] bg-black" />

      <p className="text-primary-dark text-lg">{description}</p>
    </div>
  );
};
