import { FC } from "react";
import { ProcessCard } from "../ProcessCard/ProcessCard";
import { FaBolt, FaRegSnowflake } from "react-icons/fa";
import { MdCleanHands } from "react-icons/md";
import { GiReactor } from "react-icons/gi";
import { PiGasCanFill } from "react-icons/pi";
import { LiaAtomSolid } from "react-icons/lia";

const processSteps = [
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

export const ProcessesList: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {processSteps.map((step, index) => (
        <ProcessCard
          key={index}
          {...step}
        />
      ))}
    </div>
  );
};
