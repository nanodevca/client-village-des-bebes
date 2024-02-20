interface NavigationItemType {
  name: string;
  href: string;
  children?: NavigationItemType[];
}

export { NavigationItemType };
