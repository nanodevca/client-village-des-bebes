import { UploadFileEntity } from "../src/types/gql/graphql";
import { gql } from "graphql-request";
import { GraphQLClient } from "graphql-request";
import { config } from "dotenv";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import * as path from "path";
import { GalleryImageFromCMS } from "../src/types/memories";

config();

const grafbase = new GraphQLClient(process.env.STRAPI_GRAPHQL_URL as string);

const graphQLLoadGalleryImagesLinks = async () => {
  const response = await grafbase
    .request<{
      translations: { data: UploadFileEntity };
    }>(
      gql`
        query {
          laval_mosaic_festival: uploadFiles(
            pagination: { pageSize: 999 }
            filters: {
              alternativeText: { eq: "laval_mosaic_festival" }
              ext: { in: [".jpg", ".png", ".heic", ".mov", ".jpeg"] }
            }
          ) {
            data {
              id
              attributes {
                name
                ext
                url
                provider_metadata
              }
            }
          }
          baby_village_launch: uploadFiles(
            pagination: { pageSize: 999 }
            filters: {
              alternativeText: { eq: "baby_village_launch" }
              ext: { in: [".jpg", ".png", ".heic", ".mov", ".jpeg"] }
            }
          ) {
            data {
              id
              attributes {
                name
                ext
                url
                provider_metadata
              }
            }
          }
          activity_conte: uploadFiles(
            pagination: { pageSize: 999 }
            filters: {
              alternativeText: { eq: "activity_conte" }
              ext: { in: [".jpg", ".png", ".heic", ".mov", ".jpeg"] }
            }
          ) {
            data {
              id
              attributes {
                name
                ext
                url
                provider_metadata
              }
            }
          }
          black_women_salon: uploadFiles(
            pagination: { pageSize: 999 }
            filters: {
              alternativeText: { eq: "black_women_salon" }
              ext: { in: [".jpg", ".png", ".heic", ".mov", ".jpeg"] }
            }
          ) {
            data {
              id
              attributes {
                name
                ext
                url
                provider_metadata
              }
            }
          }
        }
      `
    )
    .then((result: any) => {
      const cmsImages: GalleryImageFromCMS = {
        activity_conte: [],
        baby_village_launch: [],
        black_women_salon: [],
        laval_mosaic_festival: [],
      };

      result["activity_conte"]["data"].forEach((media: any) => {
        cmsImages["activity_conte"].push({
          id: media["id"],
          src: media["attributes"]["url"],
          ext: media["attributes"]["ext"],
          type: media["attributes"]["provider_metadata"]["resource_type"],
          filters: ["activity_conte"],
        });
      });

      result["baby_village_launch"]["data"].forEach((media: any) => {
        cmsImages["baby_village_launch"].push({
          id: media["id"],
          src: media["attributes"]["url"],
          ext: media["attributes"]["ext"],
          type: media["attributes"]["provider_metadata"]["resource_type"],
          filters: ["baby_village_launch"],
        });
      });

      result["black_women_salon"]["data"].forEach((media: any) => {
        cmsImages["black_women_salon"].push({
          id: media["id"],
          src: media["attributes"]["url"],
          ext: media["attributes"]["ext"],
          type: media["attributes"]["provider_metadata"]["resource_type"],
          filters: ["black_women_salon"],
        });
      });

      result["laval_mosaic_festival"]["data"].forEach((media: any) => {
        cmsImages["laval_mosaic_festival"].push({
          id: media["id"],
          src: media["attributes"]["url"],
          ext: media["attributes"]["ext"],
          type: media["attributes"]["provider_metadata"]["resource_type"],
          filters: ["laval_mosaic_festival"],
        });
      });

      // Create a directory to store the medias if it doesn't exist. The directory is created in the root of the project
      const dir = path.join(__dirname, "../src/assets");
      if (!existsSync(dir)) {
        mkdirSync(dir);
        const mediasDir = path.join(dir, "galleryImages");
        if (!existsSync(mediasDir)) {
          mkdirSync(mediasDir);
        }
      }
      // Write the medias to a file. If the file doesn't exist, it will be created and if it does, it will be overwritten
      writeFileSync(
        `${dir}/galleryImages/galleryImages.json`,
        JSON.stringify(cmsImages, null, 2)
      );
    });
};

graphQLLoadGalleryImagesLinks();
