"use client";

import { NavigationItemType } from "../types/navLinks";
import { getTranslation } from "../utils/functions";

const translations = getTranslation();

const navigation = (locale: "en" | "fr"): NavigationItemType[] => {
  return [
    { name: `${translations[locale]["navbar-home"]}`, href: "/" },
    {
      name: `${translations[locale]["navbar-services"]}`,
      href: "/services",
      children: [
        {
          name: `${translations[locale]["navbar-services-prenatal-workshops"]}`,
          href: "/services/prenatal-workshops",
        },
        {
          name: `${translations[locale]["navbar-services-well-being"]}`,
          href: "/services/well-being",
        },
        {
          name: `${translations[locale]["navbar-services-awakening"]}`,
          href: "/services/awakening",
        },
        {
          name: `${translations[locale]["navbar-services-food"]}`,
          href: "/services/food",
        },
        {
          name: `${translations[locale]["navbar-services-educational-workshops"]}`,
          href: "/services/educational-workshops",
        },
        {
          name: `${translations[locale]["navbar-services-chats"]}`,
          href: "/services/chats",
        },
        {
          name: `${translations[locale]["navbar-services-support"]}`,
          href: "/services/support",
        },
        {
          name: `${translations[locale]["navbar-services-big-events"]}`,
          href: "/services/big-events",
        },
        {
          name: `${translations[locale]["navbar-services-godmothers"]}`,
          href: "/services/godmothers",
        },
      ],
    },
    {
      name: `${translations[locale]["navbar-professionals"]}`,
      href: "/professionals",
      children: [
        {
          name: `${translations[locale]["navbar-professionals-parents"]}`,
          href: "/professionals/parents",
        },
        {
          name: `${translations[locale]["navbar-professionals-professionals"]}`,
          href: "/professionals/professionals",
        },
      ],
    },
    {
      name: `${translations[locale]["navbar-organization"]}`,
      href: "/organization",
      children: [
        {
          name: `${translations[locale]["navbar-organization-about"]}`,
          href: "/organization/about-us",
        },
        {
          name: `${translations[locale]["navbar-organization-annual-reports"]}`,
          href: "/organization/annual-reports",
        },
        {
          name: `${translations[locale]["navbar-organization-blog"]}`,
          href: "/organization/blog",
        },
        {
          name: `${translations[locale]["navbar-organization-careers"]}`,
          href: "/organization/careers",
        },
      ],
    },
    { name: `${translations[locale]["navbar-photos"]}`, href: "/photos" },
    { name: `${translations[locale]["navbar-contact"]}`, href: "/contact" },
  ];
};

export { navigation };
