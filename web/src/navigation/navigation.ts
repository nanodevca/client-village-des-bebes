"use client";

import { NavigationItemType } from "../types/navLinks";

const navigation: NavigationItemType[] = [
  { name: "Acceuil", href: "/" },
  {
    name: "Activités et Services",
    href: "/services",
    children: [
      {
        name: "Ateliers prénataux",
        href: "/services/prenatal-workshops",
      },
      {
        name: "Bien être",
        href: "/services/well-being",
      },
      {
        name: "Eveil",
        href: "/services/awakening",
      },
      {
        name: "Alimentation",
        href: "/services/food",
      },
      {
        name: "Ateliers éducatifs",
        href: "/services/educational-workshops",
      },
      {
        name: "Causeries",
        href: "/services/chats",
      },
      {
        name: "Soutien",
        href: "/services/support",
      },
      {
        name: "Grands évenements",
        href: "/services/big-events",
      },
      {
        name: "Marraines",
        href: "/services/godmothers",
      },
    ],
  },
  {
    name: "Professionnels",
    href: "/professionals",
    children: [
      {
        name: "Je suis parent",
        href: "/professionals/parents",
      },
      {
        name: "Je suis professionnel",
        href: "/professionals/professionals",
      },
    ],
  },
  {
    name: "L'organisation",
    href: "/organization",
    children: [
      {
        name: "A propos de nous",
        href: "/organization/about-us",
      },
      {
        name: "Rapport annuel",
        href: "/organization/annual-reports",
      },
    ],
  },
  { name: "Photos souvenirs", href: "/photos" },
  { name: "Contact", href: "/contact" },
];

const altLinks = [{ name: "Acceuil", href: "/home" }];

export { navigation, altLinks };
