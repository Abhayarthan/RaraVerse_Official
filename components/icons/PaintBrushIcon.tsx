
import React from 'react';

export const PaintBrushIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9.06 11.9 2 19v3h3l7.06-7.06-2-2z" />
      <path d="m14.12 6.88 2.82-2.82a2 2 0 0 0-2.82-2.82L11.3 4.06l2.82 2.82z" />
      <path d="m14.12 6.88-2.82 2.82" />
      <path d="M3 21h18" />
    </svg>
  );
};
