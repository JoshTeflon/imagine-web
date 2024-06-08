"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import classnames from "classnames";

import { Button } from "@/components/interface";
import { MobileNav } from "@/components/global";
import { navItems } from "@/lib";
import { NavItem } from "@/types";

const Header: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      closeMobileNav();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    const contentContainer = document.getElementById('content-container');
    if (isMobileNavOpen) {
      document.body.classList.add("no-scroll");
      if (contentContainer) contentContainer.classList.add("blur");
    } else {
      document.body.classList.remove("no-scroll");
      if (contentContainer) contentContainer.classList.remove("blur");
    }
  }, [isMobileNavOpen]);

  return (
    <header className="fixed top-0 z-30 w-full" ref={navRef}>
      <div className="w-full h-[4.125rem] lg:h-[4.625rem] bg-white border-b border-low">
        <div className="mx-auto w-11/12 xl:w-3/4 h-full flex items-center justify-between">
          <div className="text-dark font-black uppercase">
            <Link href="/" className="text-base md:text-2xl lg:text-[2rem]">
              <span>IMAGINE INTEGRATED SYSTEMS</span>
            </Link>
          </div>
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-12">
              {
                navItems?.map((item: NavItem) => (
                  <li key={item?.url}>
                    <Link
                      href={item?.url}
                      className={classnames("text-base text-grey hover:text-primary font-medium whitespace-nowrap", {
                        "text-primary": pathname === item?.url
                      })}
                    >
                      <span>{item?.label?.charAt(0).toUpperCase() + item?.label?.slice(1)}</span>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </nav>
          <div className="hidden lg:block">
            <Button>Contact us</Button>
          </div>
          <Button
            variant="naked"
            className="lg:hidden"
            onClick={() => setIsMobileNavOpen(prevState => !prevState)}
          >
            <div className={classnames("hamburger", { "mobile-nav_open": isMobileNavOpen })}>
              <span className="bar bar1"></span>
              <span className="bar bar2"></span>
              <span className="bar bar3"></span>
              <span className="bar bar4"></span>
            </div>
          </Button>
        </div>
      </div>
      <MobileNav
        className={classnames("transition-transform duration-300 ease-in-out transform", {
          "translate-x-full": !isMobileNavOpen,
          "translate-x-0": isMobileNavOpen
        })}
        onReset={closeMobileNav}
      />
    </header>
  )
}

export default Header;