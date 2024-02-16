"use client";
import Image from "next/image";
import Slider from "react-slick";
import { partnersType } from "../../types/partners";

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
      image: "/assets/partners/centraide_du_grand_montreal.webp",
      description: "Centraide du grand montreal",
      url: "https://www.centraide-mtl.org/",
    },
    {
      image: "/assets/partners/entreprendre_ici.webp",
      description: "Entreprendre ici",
      url: "https://entreprendreici.org/",
    },
    {
      image: "/assets/partners/centre_international_espoir.webp",
      description: "Centre international espoir",
      url: "https://ciespoir.org/",
    },
    {
      image: "/assets/partners/ecole_entrepreneurs_quebec.webp",
      description: "École des entrepreneurs du Québec",
      url: "https://eequebec.com/",
    },
    {
      image: "/assets/partners/CISSSDeLaval.webp",
      description: "Centre intégré de santé et de services sociaux de Laval",
      url: "https://www.lavalensante.com/",
    },
    {
      image: "/assets/partners/defi_osentreprendre.webp",
      description: "Défi OSEntreprendre",
      url: "https://www.osentreprendre.quebec/defi-osentreprendre/",
    },
    {
      image: "/assets/partners/laval_economique.webp",
      description: "Laval économique",
      url: "https://lavaleconomique.com/",
    },
    {
      image: "/assets/partners/mieux_naitre_laval.webp",
      description: "Mieux naitre à Laval",
      url: "https://www.mieuxnaitre.org/",
    },
    {
      image: "/assets/partners/pole_regional_economie_sociale_laval.webp",
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
                width={130}
                height={130}
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
