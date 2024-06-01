import { SVGProps } from 'react';

const Facebook = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={12}
      height={22}
      viewBox="0 0 12 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.424 21.865v-9.822h3.296l.495-3.827h-3.79V5.772c0-1.109.307-1.863 1.896-1.863l2.027-.001V.484a27.166 27.166 0 00-2.953-.15c-2.923 0-4.923 1.783-4.923 5.06v2.822H.167v3.827h3.305v9.822h3.952z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Facebook;