import Link from "next/link";

import { Button } from "@/components/interface";
import { navItems } from "@/lib";
import { NavItem } from "@/types";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-30 w-full h-[4.125rem] lg:h-[4.625rem] bg-white">
      <div className="mx-auto w-11/12 xl:w-3/4 h-full flex items-center justify-between">
        <div className="text-dark font-black uppercase">
          <span className="text-base md:text-2xl lg:text-[2rem]">IMAGINE INTEGRATED SYSTEMS</span>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-12">
            {
              navItems?.map((item: NavItem) => (
                <li key={item?.url}>
                  <Link
                    href={item?.url}
                    className="text-base text-grey font-medium whitespace-nowrap"
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
        <div className="lg:hidden"></div>
      </div>
    </header>
  )
}

export default Header;