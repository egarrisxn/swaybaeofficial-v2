import type { ComponentType, SVGProps, JSX, ReactNode } from "react";

// Actions
export interface ActionState {
  message: string;
  success: boolean | undefined;
  errors?: Record<string, string[] | undefined>;
}
export type ActionResult =
  | { success: true; res: unknown }
  | { success: false; err: unknown };

// Icons
export interface Icons extends SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
}
export type IconComponent = ComponentType<Icons>;

// Links
export interface Links {
  href: string;
  label: string;
  external?: boolean;
  icon?: JSX.Element;
}

// Lists
export interface Lists {
  title?: string;
  description?: string;
  link?: string;
  linkText?: string;
}
export interface ReusableLists {
  title: string;
  description?: string | ReactNode;
  items?: Lists[];
}

// Socials
export interface Socials {
  id: string;
  title: string;
  href: string;
  username?: string;
  className?: string;
  Icon: IconComponent;
}

// Target ID
export interface TargetId {
  targetId: string;
}

// Text Blurb
export interface TextBlurb {
  badge?: string;
  heading?: string;
  body?: string;
  button?: string;
  video?: string;
}
