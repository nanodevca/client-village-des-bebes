import { ActivityTab } from "@/src/types/activity";
import { getTranslation } from "../../utils/functions";

const translations = getTranslation();

const activities = (locale: "en" | "fr"): ActivityTab => {
  return {
    prenatal: [
      {
        title: `${translations[locale]["services-serenite-natale-title"]}`,
        description: `${translations[locale]["services-serenite-natale-description"]}`,
        header: "/assets/images/activities/IMG_0214.jpg",
        price: `${translations[locale]["services-serenite-natale-price"]}`,
        duration: `${translations[locale]["services-serenite-natale-duration"]}`,
        public: `${translations[locale]["services-serenite-natale-public"]}`,
      },
      {
        title: `${translations[locale]["services-danse-douce-title"]}`,
        description: `${translations[locale]["services-danse-douce-description"]}`,
        header: "/assets/images/activities/IMG_0214.jpg",
        price: `${translations[locale]["services-danse-douce-price"]}`,
        duration: `${translations[locale]["services-danse-douce-duration"]}`,
        public: `${translations[locale]["services-danse-douce-public"]}`,
      },
      {
        title: `${translations[locale]["services-yoga-afro-eveil-title"]}`,
        description: `${translations[locale]["services-yoga-afro-eveil-description"]}`,
        header: "/assets/images/activities/IMG_0214.jpg",
        price: `${translations[locale]["services-yoga-afro-eveil-price"]}`,
        duration: `${translations[locale]["services-yoga-afro-eveil-duration"]}`,
        public: `${translations[locale]["services-yoga-afro-eveil-public"]}`,
      },
    ],
    wellness: [
      {
        title: `${translations[locale]["services-danse-afro-douce-title"]}`,
        description: `${translations[locale]["services-danse-afro-douce-description"]}`,
        header: "/assets/images/activities/IMG_0214.jpg",
        price: `${translations[locale]["services-danse-afro-douce-price"]}`,
        duration: `${translations[locale]["services-danse-afro-douce-duration"]}`,
        public: `${translations[locale]["services-danse-afro-douce-public"]}`,
      },
      {
        title: `${translations[locale]["services-yoga-afro-eveil-eveil-title"]}`,
        description: `${translations[locale]["services-yoga-afro-eveil-eveil-description"]}`,
        header: "/assets/images/activities/IMG_0214.jpg",
        price: `${translations[locale]["services-yoga-afro-eveil-eveil-price"]}`,
        duration: `${translations[locale]["services-yoga-afro-eveil-eveil-duration"]}`,
        public: `${translations[locale]["services-yoga-afro-eveil-eveil-public"]}`,
      },
      {
        title: `${translations[locale]["services-meditation-tambourin-title"]}`,
        description: `${translations[locale]["services-meditation-tambourin-description"]}`,
        header: "/assets/images/activities/IMG_0214.jpg",
        price: `${translations[locale]["services-meditation-tambourin-price"]}`,
        duration: `${translations[locale]["services-meditation-tambourin-duration"]}`,
        public: `${translations[locale]["services-meditation-tambourin-public"]}`,
      },
    ],
    awakening: [
      {
        title: `${translations[locale]["services-voyage-sensoriel-title"]}`,
        description: `${translations[locale]["services-voyage-sensoriel-description"]}`,
        header: "/assets/images/activities/IMG_0214.jpg",
        price: `${translations[locale]["services-voyage-sensoriel-price"]}`,
        duration: `${translations[locale]["services-voyage-sensoriel-duration"]}`,
        public: `${translations[locale]["services-voyage-sensoriel-public"]}`,
      },
      {
        title: `${translations[locale]["services-contes-africains-title"]}`,
        description: `${translations[locale]["services-contes-africains-description"]}`,
        header: "/assets/images/activities/IMG_0214.jpg",
        price: `${translations[locale]["services-contes-africains-price"]}`,
        duration: `${translations[locale]["services-contes-africains-duration"]}`,
        public: `${translations[locale]["services-contes-africains-public"]}`,
      },

      {
        title: `${translations[locale]["services-peinture-doigts-safari-title"]}`,
        description: `${translations[locale]["services-peinture-doigts-safari-description"]}`,
        header: "/assets/images/activities/IMG_0214.jpg",
        price: `${translations[locale]["services-peinture-doigts-safari-price"]}`,
        duration: `${translations[locale]["services-peinture-doigts-safari-duration"]}`,
        public: `${translations[locale]["services-peinture-doigts-safari-public"]}`,
      },
    ],
    nutrition: [
      {
        title: `${translations[locale]["services-cuisine-afro-petits-chefs-title"]}`,
        description: `${translations[locale]["services-cuisine-afro-petits-chefs-description"]}`,
        header: "/assets/images/activities/IMG_0214.jpg",
        price: `${translations[locale]["services-cuisine-afro-petits-chefs-price"]}`,
        duration: `${translations[locale]["services-cuisine-afro-petits-chefs-duration"]}`,
        public: `${translations[locale]["services-cuisine-afro-petits-chefs-public"]}`,
      },
      {
        title: `${translations[locale]["services-gouter-saveurs-africaines-title"]}`,
        description: `${translations[locale]["services-gouter-saveurs-africaines-description"]}`,
        header: "/assets/images/activities/IMG_0214.jpg",
        price: `${translations[locale]["services-gouter-saveurs-africaines-price"]}`,
        duration: `${translations[locale]["services-gouter-saveurs-africaines-duration"]}`,
        public: `${translations[locale]["services-gouter-saveurs-africaines-public"]}`,
      },
      {
        title: `${translations[locale]["services-jardin-africain-papilles-title"]}`,
        description: `${translations[locale]["services-jardin-africain-papilles-description"]}`,
        header: "/assets/images/activities/IMG_0214.jpg",
        price: `${translations[locale]["services-jardin-africain-papilles-price"]}`,
        duration: `${translations[locale]["services-jardin-africain-papilles-duration"]}`,
        public: `${translations[locale]["services-jardin-africain-papilles-public"]}`,
      },
    ],
    educational: [
      {
        title: `${translations[locale]["services-exploration-faune-africaine-title"]}`,
        description: `${translations[locale]["services-exploration-faune-africaine-description"]}`,
        header: "/assets/images/activities/IMG_0214.jpg",
        price: `${translations[locale]["services-exploration-faune-africaine-price"]}`,
        duration: `${translations[locale]["services-exploration-faune-africaine-duration"]}`,
        public: `${translations[locale]["services-exploration-faune-africaine-public"]}`,
      },
      {
        title: `${translations[locale]["services-formes-geometriques-africaines-title"]}`,
        description: `${translations[locale]["services-formes-geometriques-africaines-description"]}`,
        header: "/assets/images/activities/IMG_0214.jpg",
        price: `${translations[locale]["services-formes-geometriques-africaines-price"]}`,
        duration: `${translations[locale]["services-formes-geometriques-africaines-duration"]}`,
        public: `${translations[locale]["services-formes-geometriques-africaines-public"]}`,
      },

      {
        title: `${translations[locale]["services-lab-couleurs-africaines-title"]}`,
        description: `${translations[locale]["services-lab-couleurs-africaines-description"]}`,
        header: "/assets/images/activities/IMG_0214.jpg",
        price: `${translations[locale]["services-lab-couleurs-africaines-price"]}`,
        duration: `${translations[locale]["services-lab-couleurs-africaines-duration"]}`,
        public: "4-5 ans",
      },
    ],
    talks: [
      {
        title: `${translations[locale]["services-causerie-parents-bebes-title"]}`,
        description: `${translations[locale]["services-causerie-parents-bebes-description"]}`,
        header: "/assets/images/activities/IMG_0214.jpg",
        price: `${translations[locale]["services-causerie-parents-bebes-price"]}`,
        duration: `${translations[locale]["services-causerie-parents-bebes-duration"]}`,
        public: `${translations[locale]["services-causerie-parents-bebes-public"]}`,
      },
      {
        title: `${translations[locale]["services-histoires-afro-familiales-title"]}`,
        description: `${translations[locale]["services-histoires-afro-familiales-description"]}`,
        header: "/assets/images/activities/IMG_0214.jpg",
        price: `${translations[locale]["services-histoires-afro-familiales-price"]}`,
        duration: `${translations[locale]["services-histoires-afro-familiales-duration"]}`,
        public: `${translations[locale]["services-histoires-afro-familiales-public"]}`,
      },
      {
        title: `${translations[locale]["services-causerie-parentalite-africaine-title"]}`,
        description: `${translations[locale]["services-causerie-parentalite-africaine-description"]}`,
        header: "/assets/images/activities/IMG_0214.jpg",
        price: `${translations[locale]["services-causerie-parentalite-africaine-price"]}`,
        duration: `${translations[locale]["services-causerie-parentalite-africaine-duration"]}`,
        public: `${translations[locale]["services-causerie-parentalite-africaine-public"]}`,
      },
    ],
    support: [
      {
        title: `${translations[locale]["services-entraide-mamans-title"]}`,
        description: `${translations[locale]["services-entraide-mamans-description"]}`,
        header: "/assets/images/activities/IMG_0214.jpg",
        price: `${translations[locale]["services-entraide-mamans-price"]}`,
        duration: `${translations[locale]["services-entraide-mamans-duration"]}`,
        public: `${translations[locale]["services-entraide-mamans-public"]}`,
      },
      {
        title: `${translations[locale]["services-atelier-relaxation-familiale-title"]}`,
        description: `${translations[locale]["services-atelier-relaxation-familiale-description"]}`,
        header: "/assets/images/activities/IMG_0214.jpg",
        price: `${translations[locale]["services-atelier-relaxation-familiale-price"]}`,
        duration: `${translations[locale]["services-atelier-relaxation-familiale-duration"]}`,
        public: `${translations[locale]["services-atelier-relaxation-familiale-public"]}`,
      },
      {
        title: `${translations[locale]["services-journee-portes-ouvertes-title"]}`,
        description: `${translations[locale]["services-journee-portes-ouvertes-description"]}`,
        header: "/assets/images/activities/IMG_0214.jpg",
        price: `${translations[locale]["services-journee-portes-ouvertes-price"]}`,
        duration: `${translations[locale]["services-journee-portes-ouvertes-duration"]}`,
        public: `${translations[locale]["services-journee-portes-ouvertes-public"]}`,
      },
    ],
    bigEvents: [
      {
        title: `${translations[locale]["services-noel-village-title"]}`,
        description: "",
        header: "/assets/images/activities/IMG_0214.jpg",
        price: 0,
        duration: "",
        public: "",
      },
      {
        title: `${translations[locale]["services-afrique-famille-title"]}`,
        description: "",
        header: "/assets/images/activities/IMG_0214.jpg",
        price: 0,
        duration: "",
        public: "",
      },
    ],
  };
};

export { activities };
