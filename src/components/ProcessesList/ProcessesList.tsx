import { FC } from "react";
import { IProcessStep } from "../../pages/DashboardPage/DashboardPage";
import { ProcessCard } from "../ProcessCard/ProcessCard";

interface Props {
  steps: IProcessStep[];
  onStepClick: (stepIndex: number) => void;
}

export const ProcessesList: FC<Props> = ({ steps, onStepClick }) => {
  return (
    <div className="flex flex-col gap-4">
      {steps.map((step, index) => (
        <ProcessCard
          key={index}
          {...step}
          onStepClick={() => onStepClick(index)}
        />
      ))}
    </div>
  );
};
