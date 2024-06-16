"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";

import { Button } from "@/components/interface";
import { navItems } from "@/lib";
import { NavItem } from "@/types";

export interface MobileNavProps {
  className?: string
  onReset?: () => void
}

const MobileNav: React.FC<MobileNavProps> = ({ className, onReset }) => {
  const pathname = usePathname();

  return (
    <div className={classnames(className, "ml-auto py-3 max-w-44 w-full bg-white")}>
      <nav>
          <ul className="flex flex-col items-center space-y-5">
          {
            navItems?.map((item: NavItem) => (
              <li key={item?.url}>
                <Link
                  href={item?.url}
                  aria-label={`${item?.label} page`}
                  className={classnames("text-base text-grey hover:text-primary font-bold whitespace-nowrap", {
                    "text-primary": pathname === item?.url
                  })}
                  onClick={onReset}
                >
                  <span>{item?.label?.charAt(0).toUpperCase() + item?.label?.slice(1)}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
      <div className="mt-5 flex items-center justify-center">
        <Button className="mx-auto w-full max-w-36 !py-2 !px-4">
          <a
            className="w-full h-full"
            href="mailto:example@example.com?subject=Contact&body=Hello, I would like to..."
            onClick={onReset}
          >Contact</a>
        </Button>
      </div>
    </div>
  )
}

export default MobileNav;