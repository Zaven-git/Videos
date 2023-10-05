export interface Params {
  page?: number;
  name?: string;
  score?: string;
  orderBy?: string;
}

export interface VideItem {
  id: number;
  first_release_date: number;
  name: string;
  rating: number;
  summary: string;
}

export interface SelectProps {
  options: string[];
  default?: string
  tabindex?: number
}

export interface HeaderProps{
  heading:string
}