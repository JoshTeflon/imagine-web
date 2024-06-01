import { SVGProps } from 'react';

const Email = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={21}
      height={16}
      viewBox="0 0 21 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.833 2c0-1.1-.9-2-2-2h-16c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2zm-2 0l-8 4.99-8-4.99h16zm0 12h-16V4l8 5 8-5v10z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Email;