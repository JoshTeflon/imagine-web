import { StaticImageData } from "next/image";
import { SVGProps } from "react";

export interface NavItem {
  label: string
  url: string
}

export interface AboutDetails {
  header: string
  paragraph: string
  href: string
}

export interface SocialLinks {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>
  url: string
}

export interface Training {
  src: StaticImageData
  title: string
  body: string
}

export interface Skill {
  src: StaticImageData
  skill: string
}

export interface Service {
  src: StaticImageData
  title: string
}

export interface Review {
  imageUrl: string
  name: string
  role: string
  comment: string
}