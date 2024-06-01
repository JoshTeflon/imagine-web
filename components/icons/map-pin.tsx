import { SVGProps } from 'react';

const MapPin = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={14}
      height={20}
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.336 9.528a2.624 2.624 0 100-5.248 2.624 2.624 0 000 5.248z"
        stroke="currentColor"
        strokeWidth={1.09334}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.584 9.528c-1.968 4.592-5.248 9.84-5.248 9.84s-3.28-5.248-5.248-9.84C.12 4.936 3.4 1 7.336 1s7.216 3.936 5.248 8.528z"
        stroke="currentColor"
        strokeWidth={1.09334}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MapPin;