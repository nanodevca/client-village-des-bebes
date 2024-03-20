export type AlbumsFilters = {
  label: string;
  isChecked: boolean;
}[];

export type AlbumType = {
  tag: string;
  name: string;
  cover: string;
}[];

export type GalleryImageFromCMSEntry = {
  id: string;
  src: string;
  ext: "jpg" | "jpeg" | "heic" | "mov" | "mp4";
  type: "image" | "video";
  alt?: string;
  filters: string[];
}[];

export type GalleryImageFromCMS = {
  [key: string]: GalleryImageFromCMSEntry;
  laval_mosaic_festival: GalleryImageFromCMSEntry;
  baby_village_launch: GalleryImageFromCMSEntry;
  activity_conte: GalleryImageFromCMSEntry;
  black_women_salon: GalleryImageFromCMSEntry;
};
