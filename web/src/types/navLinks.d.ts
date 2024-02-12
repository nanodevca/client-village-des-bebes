interface NavigationItemType {
  name: string;
  href: string;
  current?: boolean;
  children?: NavigationItemType[];
}

export { NavigationItemType };
