import { FC } from "react";

interface Props {
  currentPoints: number;
  pointsForTheNextLevel: number;
  innerText: string;
  percentage: string;
  label: string;
}

export const CircularProgressBar: FC<Props> = ({
  currentPoints,
  pointsForTheNextLevel,
  innerText,
  percentage,
  label,
}) => {
  const outerRadius = 55; // Adjusted radius for outer circle

  const outerCircumference = 2 * Math.PI * outerRadius;
  let outerPercentage = (currentPoints / pointsForTheNextLevel) * 100;
  if (outerPercentage > 100) {
    outerPercentage = 100; // limit the percentage to 100 if currentPoints exceeds pointsForTheNextLevel
  }
  const outerStrokeDashoffset = outerCircumference - (outerPercentage / 100) * outerCircumference;

  // Determine colors based on percentage value
  const isNegative = percentage.startsWith("-");
  const percentageColor = isNegative ? "#F04438" : "#34C759";
  const innerTextColor = "#1A1C20";

  // Extract the numeric part of the percentage value and determine the symbol
  const numericPercentage = percentage.replace(/[^0-9]/g, "");
  const signSymbol = isNegative ? "▼" : "▲";

  return (
    <div className="relative flex flex-col justify-center items-center gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
      >
        <defs>
          <linearGradient
            id="gradientBlue"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="1.71%"
              stopColor="#3036BD"
            />
            <stop
              offset="98.14%"
              stopColor="#487FE8"
            />
          </linearGradient>
          <linearGradient
            id="gradientGold"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="-16.11%"
              stopColor="#FFC454"
            />
            <stop
              offset="100%"
              stopColor="#634815"
            />
          </linearGradient>
        </defs>
        <circle
          cx="60"
          cy="60"
          r={outerRadius}
          stroke="transparent"
          strokeWidth="10"
        />
        <circle
          cx="60"
          cy="60"
          r={outerRadius}
          stroke="url(#gradientBlue)"
          strokeWidth="10"
          strokeDasharray={outerCircumference}
          strokeDashoffset={outerStrokeDashoffset}
          strokeLinecap="round"
        />
        <text
          x="50%"
          y={innerText && percentage ? "45%" : "40%"}
          textAnchor="middle"
          dy=".3em"
          fontSize="16"
        >
          <tspan
            x="50%"
            dy="0"
            fill={innerTextColor}
            className="font-bold"
          >
            {innerText}
          </tspan>
          <tspan
            x="50%"
            dy="0"
            fill={percentageColor}
          >
            <tspan
              x="50%"
              dy="2em"
              fontSize={8}
            >
              {signSymbol}
            </tspan>{" "}
            {numericPercentage}%
          </tspan>
        </text>
      </svg>

      <span className="text-baseWhite text-sm font-medium">{label}</span>
    </div>
  );
};
