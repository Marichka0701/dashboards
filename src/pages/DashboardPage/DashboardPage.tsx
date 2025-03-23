import { FC, useState, useState } from "react";
import { IconType } from "react-icons";
import { FaBolt, FaRegSnowflake } from "react-icons/fa";
import { GiReactor } from "react-icons/gi";
import { LiaAtomSolid } from "react-icons/lia";
import { MdCleanHands } from "react-icons/md";
import { PiGasCanFill } from "react-icons/pi";
import { ProcessesList } from "../../components/ProcessesList/ProcessesList";
import { ProductStatsIndicators } from "../../components/ProductStatsIndicators/ProductStatsIndicators";

export interface IProcessStep {
  title: string;
  Icon: IconType;
  iconClassname: string;
  code: string;
  description: string;
}

const processSteps: IProcessStep[] = [
  {
    title: "Substrate Preparation",
    Icon: FaBolt,
    iconClassname: "text-yellow-500 size-6",
    code: "01 - 122",
    description: "Select and cut a copper or nickel substrate for graphene growth.",
  },
  {
    title: "Substrate Cleaning",
    Icon: MdCleanHands,
    iconClassname: "size-6",
    code: "01 - 123",
    description: "Thoroughly clean the substrate to remove impurities and ensure uniform growth.",
  },
  {
    title: "Placing in CVD Reactor",
    Icon: GiReactor,
    iconClassname: "size-6",
    code: "01 - 124",
    description: "Place the metal substrate inside the CVD reactor for graphene deposition.",
  },
  {
    title: "Passing Hydrocarbon Gas",
    Icon: PiGasCanFill,
    iconClassname: "text-red-500 size-6",
    code: "01 - 125",
    description: "Methane decomposes at 1000°C, releasing carbon atoms for graphene formation.",
  },
  {
    title: "Carbon Atoms",
    Icon: LiaAtomSolid,
    iconClassname: "text-gray-500 size-6",
    code: "01 - 126",
    description: "Carbon atoms form a monolayer of graphene on the metal substrate surface.",
  },
  {
    title: "Cooling Process",
    Icon: FaRegSnowflake,
    iconClassname: "text-blue-300 size-6",
    code: "01 - 126",
    description: "Gradual cooling stabilizes the graphene layer on the substrate.",
  },
];

export const DashboardPage: FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="bg-primary-light p-4 sm:p-8 flex flex-1 flex-col xl:flex-row gap-8">
      <div className="w-full xl:w-3/5">
        <ProductStatsIndicators step={processSteps[activeStep]} />
      </div>

      <div className="w-full xl:w-2/5">
        <ProcessesList steps={processSteps} onStepClick={setActiveStep} />
      </div>
    </div>
  );
};
