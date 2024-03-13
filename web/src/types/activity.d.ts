export type Activity = {
  title?: string;
  description?: string;
  header?: string;
  price?: number | string;
  duration?: string;
  public?: string;
  className?: string;
  index?: number;
};

export type ActivityTab = {
  [key: string]: Activity[];
};
