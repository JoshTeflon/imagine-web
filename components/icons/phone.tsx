import { SVGProps } from 'react';

const Phone = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={19}
      height={19}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.5 4.923C1.5 12.145 7.01 18 13.808 18h1.846c.49 0 .96-.207 1.305-.575.346-.367.541-.866.541-1.387v-1.196c0-.45-.288-.842-.7-.95l-3.628-.965a.894.894 0 00-.963.364l-.796 1.127c-.23.328-.63.472-.992.331a9.83 9.83 0 01-3.575-2.429A10.596 10.596 0 014.56 8.522a.959.959 0 01.311-1.055l1.061-.846c.298-.236.433-.64.343-1.022l-.908-3.856a.988.988 0 00-.327-.535A.889.889 0 004.472 1H3.346c-.49 0-.959.207-1.305.575-.347.367-.541.866-.541 1.387v1.961z"
        stroke="currentColor"
        strokeWidth={1.08974}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Phone;