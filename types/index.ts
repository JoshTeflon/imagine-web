import { StaticImageData } from "next/image";
import { SVGProps } from "react";

export interface NavItem {
  label: string
  url: string
}

export interface AboutDetails {
  header: string
  paragraph: string
}

export interface SocialLinks {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>
  url: string
}

export interface Services {
  src: StaticImageData
  title: string
  body: string
}