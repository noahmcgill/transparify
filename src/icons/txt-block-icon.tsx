import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  stroke?: string;
}

export const TXTBlockIcon: React.FC<IconProps> = ({ stroke = "white" }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        rx="2.5"
        stroke={stroke}
        strokeLinejoin="round"
      />
    </svg>
  );
};
