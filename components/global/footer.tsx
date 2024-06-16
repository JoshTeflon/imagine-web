import Link from "next/link";

import { MapPin, Phone } from "@/components/icons";
import { Button } from "@/components/interface";
import { navItems, socialLinks } from "@/lib";
import { NavItem, SocialLinks } from "@/types";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 lg:py-[4.5rem] lg:px-[5.5rem] w-full bg-darkBlue">
      <div className="width-balance w-full text-lowBlue flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-10 xl:space-x-20">
        <div className="max-w-md">
          <div className="text-white font-bold uppercase">
            <span className="text-base md:text-2xl">IMAGINE INTEGRATED SYSTEMS</span>
          </div>
          <p className="mt-4 mb-8 text-base">
            Your one-stop for your IT expertise. Get certified, get ahead
          </p>
          <ul className="flex items-center space-x-4 lg:space-x-8">
            {
              socialLinks?.map((link: SocialLinks) => (
                <li
                  key={link?.url}
                  className="w-8 h-8 bg-primary text-white rounded-[0.25rem]"
                >
                   <a
                    className="w-full h-full flex items-center justify-center"
                    href={link?.url}
                    aria-label={link?.label}
                  >
                    <link.icon />
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <h6 className="mb-4 text-base text-white font-medium">Quick links</h6>
          <nav>
            <ul className="flex flex-col space-y-4 lg:space-y-8">
              {
                navItems?.map((item: NavItem) => (
                  <li key={item?.url}>
                    <Link href={item?.url} aria-label={item?.label}>
                      <Button
                        variant="link"
                        className="text-base font-medium whitespace-nowrap"
                      >
                        {item?.label === 'services' ? `Our ${item?.label}` : item?.label?.charAt(0).toUpperCase() + item?.label?.slice(1)}
                      </Button>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
        <div>
          <h6 className="mb-4 text-base text-white font-medium">Contact</h6>
          <ul className="flex flex-col space-y-4 lg:space-y-8">
            <li>
              <a className="flex items-center" href="">
                <MapPin className="text-highBlue" />
                <span className="ml-2 lg:ml-3">
                  4, Agbelura Close, beside SAO petrol station, Challenge, Ibadan.
                </span>
              </a>
            </li>
            <li className="flex items-center">
              <Phone className="text-highBlue" />
              <div className="ml-2 lg:ml-3 flex items-center">
                <a href="">+234 803 475 3296</a>
                <span className="mx-1">/</span>
                <a href="">+234 807 998 8544</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;