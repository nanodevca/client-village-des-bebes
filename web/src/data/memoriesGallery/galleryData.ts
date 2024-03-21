import { AlbumType, GalleryImageFromCMSEntry } from "@/src/types/memories";
import { getGalleryImagesData } from "@/src/utils/functions";
import { GridLayout } from "react-isotope";
import { getTranslation } from "../../utils/functions";

const translations = getTranslation();

export const albums = (locale: "en" | "fr"): AlbumType => [
  {
    tag: "activity_conte",
    name: `${translations[locale]["memories-album-activite-de-conte"]}`,
    cover:
      "https://res.cloudinary.com/dquixuhcu/image/upload/v1710870420/370845146_621391003455866_507568349657303385_n_8622b620b0.jpg",
  },
  {
    tag: "laval_mosaic_festival",
    name: `${translations[locale]["memories-album-festival-mosaique-laval"]}`,
    cover:
      "https://res.cloudinary.com/dquixuhcu/image/upload/v1710870420/370845146_621391003455866_507568349657303385_n_8622b620b0.jpg",
  },
  {
    tag: "baby_village_launch",
    name: `${translations[locale]["memories-album-baby-village-launch"]}`,
    cover:
      "https://res.cloudinary.com/dquixuhcu/image/upload/v1710870420/370845146_621391003455866_507568349657303385_n_8622b620b0.jpg",
  },
  {
    tag: "black_women_salon",
    name: `${translations[locale]["memories-album-black-women-salon"]}`,
    cover:
      "https://res.cloudinary.com/dquixuhcu/image/upload/v1710870420/370845146_621391003455866_507568349657303385_n_8622b620b0.jpg",
  },
];

const rawData = getGalleryImagesData();

const generateGridLayout = (): GridLayout[] => {
  let tempGalleryImagesLayout: GridLayout[] = [];
  Object.keys(rawData).forEach((key) => {
    rawData[key as keyof typeof rawData].forEach((image, x) => {
      const layout = {
        id: image.id,
        row: 0,
        col: 0,
        w: 1,
        h: 1,
        filter: ["all", ...image.filters],
      };
      tempGalleryImagesLayout.push(layout);
    });
  });
  return tempGalleryImagesLayout;
};

const generateFlatGalleryImagesArray = () => {
  let tempGalleryImages: GalleryImageFromCMSEntry = [];
  Object.keys(rawData).forEach((key) => {
    rawData[key as keyof typeof rawData].forEach((image, x) => {
      tempGalleryImages.push({
        type: image.type as "image" | "video",
        src: image.src,
        ext: image.ext as "jpg" | "mp4" | "jpeg" | "heic" | "mov",
        filters: image.filters,
        id: image.id,
      });
    });
  });
  return tempGalleryImages;
};

const galleryImagesLayout: GridLayout[] = generateGridLayout();
const galleryImages: GalleryImageFromCMSEntry =
  generateFlatGalleryImagesArray();

export { galleryImagesLayout, galleryImages };
