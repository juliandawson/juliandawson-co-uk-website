export interface Project {
  name: string;
  description: string;
  url: string;
  social: Social;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}
