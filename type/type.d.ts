import { UseFormRegisterReturn } from "react-hook-form";

interface IText {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?:
    | "home_heading_50px"
    | "home_heading_2_40px"
    | "home_heading_3_32px"
    | "home_heading_4_32px"
    | "paragraph_1"
    | "paragraph_2"
    | "paragraph_3"
    | "paragraph_4";
  // | "lowest_body_regular"
  // | "lower_body_bold"
  // | "lower_body_medium"
  // | "lower_body_regular"
  // | "low_body_bold"
  // | "low_body_medium"
  // | "low_body_regular"
  // | "body_bold"
  // | "body_medium"
  // | "body_regular"
  // | "subtext_bold"
  // | "subtext_medium"
  // | "subtext_regular"
  // | "lower_title_medium"
  // | "low_title_bold"
  // | "low_title_medium"; //	Applies the theme typography styles.
}

interface ITypography {
  children: React.ReactNode;
  className?: string;
}


interface IButton {
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  onClick?: () => void;
}


interface IFormValues {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  countryCode?: string;
  email?: string;
  password?: string;
}


interface IFormHead {
  children: React.ReactNode;
}

interface PProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

interface IListProps {
  price: string;
  name: string;
  img: string;
}

interface ICheckboxProps {
  text: string;
}

interface IRadioProps {
  text: string;
}

interface PriceOption {
  readonly value: string;
  readonly label: string;
}

interface IOfferProps {
  children: React.ReactNode;
}
interface IFooterCommunityData {
  id: number;
  icon: React.Element;
  link: string;
}
