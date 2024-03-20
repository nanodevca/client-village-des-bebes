"use client";
import Image from "next/image";
import Slider from "react-slick";
import { partnersType } from "../../../types/partners";

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3500,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const partners: partnersType[] = [
    {
      image:
        "https://res.cloudinary.com/dquixuhcu/image/upload/v1710870566/centraide_du_grand_montreal_203bc6b4cd.webp",
      description: "Centraide du grand montreal",
      url: "https://www.centraide-mtl.org/",
    },
    {
      image:
        "https://res.cloudinary.com/dquixuhcu/image/upload/v1710870568/entreprendre_ici_4e3e72c4cf.webp",
      description: "Entreprendre ici",
      url: "https://entreprendreici.org/",
    },
    {
      image:
        "https://res.cloudinary.com/dquixuhcu/image/upload/v1710870565/centre_international_espoir_5be75f17c5.webp",
      description: "Centre international espoir",
      url: "https://ciespoir.org/",
    },
    {
      image:
        "https://res.cloudinary.com/dquixuhcu/image/upload/v1710870567/ecole_entrepreneurs_quebec_bb48766d2d.webp",
      description: "École des entrepreneurs du Québec",
      url: "https://eequebec.com/",
    },
    {
      image:
        "https://res.cloudinary.com/dquixuhcu/image/upload/v1710870566/CISSS_De_Laval_7fee6131ec.webp",
      description: "Centre intégré de santé et de services sociaux de Laval",
      url: "https://www.lavalensante.com/",
    },
    {
      image:
        "https://res.cloudinary.com/dquixuhcu/image/upload/v1710870566/defi_osentreprendre_4069a058be.webp",
      description: "Défi OSEntreprendre",
      url: "https://www.osentreprendre.quebec/defi-osentreprendre/",
    },
    {
      image:
        "https://res.cloudinary.com/dquixuhcu/image/upload/v1710870568/laval_economique_c840b39d80.webp",
      description: "Laval économique",
      url: "https://lavaleconomique.com/",
    },
    {
      image:
        "https://res.cloudinary.com/dquixuhcu/image/upload/v1710870568/mieux_naitre_laval_7bd2cc81eb.webp",
      description: "Mieux naitre à Laval",
      url: "https://www.mieuxnaitre.org/",
    },
    {
      image:
        "https://res.cloudinary.com/dquixuhcu/image/upload/v1710870568/pole_regional_economie_sociale_laval_b403622530.webp",
      description: "Pôle régional d'économie sociale de Laval",
      url: "https://www.economiesocialelaval.com/",
    },
  ];

  return (
    <div className="text-center">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <Slider {...settings}>
          {partners.map((item, x) => (
            <div
              key={x}
              className="h-[130px] w-[130px]"
              onClick={() => window.open(item.url, "_blank")}
            >
              <span className="sr-only">{item.description} </span>
              <Image
                src={item.image}
                alt={item.description}
                className="object-contain h-full w-full"
                width={1000}
                height={1000}
              />
            </div>
          ))}
        </Slider>
        <hr />
      </div>
    </div>
  );
};

export { Partners };
