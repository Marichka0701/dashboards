import { FC } from "react";
import { ProcessesList } from "../../components/ProcessesList/ProcessesList";
import { ProductStatsIndicators } from "../../components/ProductStatsIndicators/ProductStatsIndicators";

export const DashboardPage: FC = () => {
  return (
    <div className="bg-primary-light p-4 sm:p-8 flex flex-1 flex-col xl:flex-row gap-8">
      <div className="w-full xl:w-3/5">
        <ProductStatsIndicators />
      </div>

      <div className="w-full xl:w-2/5">
        <ProcessesList />
      </div>
    </div>
  );
};
