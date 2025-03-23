import { FC } from "react";
import { CircularProgressBar } from "../CircularProgressBar/CircularProgressBar";

export const CircularProgressBars: FC = () => {
  return (
    <div className="my-6 sm:mt-0 flex flex-col gap-12 sm:grid sm:grid-cols-2 lg:flex lg:flex-row md:gap-4 2xl:gap-8">
      <div className="scale-125 sm:scale-100">
        <CircularProgressBar
          currentPoints={78}
          pointsForTheNextLevel={100}
          innerText="700"
          percentage="-60%"
          label="Indicators"
        />
      </div>
      <div className="scale-125 sm:scale-100">
        {" "}
        <CircularProgressBar
          currentPoints={84}
          pointsForTheNextLevel={100}
          innerText="100"
          percentage="+68%"
          label="Indicators"
        />
      </div>
      <div className="scale-125 sm:scale-100">
        <CircularProgressBar
          currentPoints={100}
          pointsForTheNextLevel={100}
          innerText="100"
          percentage="+22%"
          label="Indicators"
        />
      </div>
      <div className="scale-125 sm:scale-100">
        <CircularProgressBar
          currentPoints={100}
          pointsForTheNextLevel={100}
          innerText=""
          percentage="+22%"
          label="Indicators"
        />
      </div>
    </div>
  );
};
