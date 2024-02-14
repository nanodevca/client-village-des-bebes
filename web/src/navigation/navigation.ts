"use client";

import { NavigationItemType } from "../types/navLinks";

const isCurrent = (href: string) => {
  if (typeof window === "undefined") return false;
  return (
    href.split("/")[1] === window.location.pathname.split("/")[1] ||
    href === "/"
  );
};

const navigation: NavigationItemType[] = [
  { name: "Acceuil", href: "/", current: true },
  {
    name: "L'organisation",
    href: "/organisation",
    current: isCurrent("/organisation"),
    children: [
      {
        name: "Qui sommes nous ?",
        href: "/organisation/who-we-are",
      },
      {
        name: "Les fondatrices et l'histoire",
        href: "/organisation/founders",
      },
      {
        name: "Conseil d'administration",
        href: "/organisation/board-of-directors",
      },
      { name: "L'équipe", href: "/organisation/team", current: false },
      {
        name: "Rapport annuel",
        href: "/organisation/annual-reports",
      },
    ],
  },
  {
    name: "Activités et Services",
    href: "/services",
    current: isCurrent("/services"),
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
  { name: "Photos souvenirs", href: "/photos", current: isCurrent("/photos") },
  {
    name: "Professionnels",
    href: "/professionals",
    current: isCurrent("/professionals"),
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
  { name: "Contact", href: "/contact", current: isCurrent("/contact") },
];

export { navigation };
