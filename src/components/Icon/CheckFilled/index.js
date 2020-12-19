import React from "react";

export default function CheckFilled({ color = "#ffffff" }) {
  return (
    <svg
      width="11"
      height="9"
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.08335 6.04014L1.7508 3.7076L0.749222 4.70918L4.08335 8.04331L10.9591 1.16751L9.95755 0.165932L4.08335 6.04014Z"
        fill={color}
      />
    </svg>
  );
}
