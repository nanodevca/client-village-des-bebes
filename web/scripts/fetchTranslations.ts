import { StringsTranslationEntity } from "../src/types/gql/graphql";
import { gql } from "graphql-request";
import { GraphQLClient } from "graphql-request";
import { config } from "dotenv";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import * as path from "path";
import { Translations } from "../src/types/translations";

config();

const grafbase = new GraphQLClient(process.env.STRAPI_GRAPHQL_URL as string);

const graphQLLoadTranslations = async () => {
  const response = await grafbase
    .request<{
      translations: { data: StringsTranslationEntity };
    }>(
      gql`
        query {
          en: stringsTranslations(pagination: { pageSize: 999 }, locale: "en") {
            data {
              id
              attributes {
                stringID
                value
              }
            }
          }
          fr: stringsTranslations(pagination: { pageSize: 999 }, locale: "fr") {
            data {
              id
              attributes {
                stringID
                value
              }
            }
          }
        }
      `
    )
    .then((result: any) => {
      const translations: Translations = {
        en: {},
        fr: {},
      };

      result["en"]["data"].forEach((translation: any) => {
        translations["en"][translation["attributes"]["stringID"]] =
          translation["attributes"]["value"];
      });

      result["fr"]["data"].forEach((translation: any) => {
        translations["fr"][translation["attributes"]["stringID"]] =
          translation["attributes"]["value"];
      });

      // Create a directory to store the translations if it doesn't exist. The directory is created in the root of the project
      const dir = path.join(__dirname, "../src/assets");
      if (!existsSync(dir)) {
        mkdirSync(dir);
        const translationsDir = path.join(dir, "translations");
        if (!existsSync(translationsDir)) {
          mkdirSync(translationsDir);
        }
      }
      // Write the translations to a file. If the file doesn't exist, it will be created and if it does, it will be overwritten
      writeFileSync(
        `${dir}/translations/translations.json`,
        JSON.stringify(translations, null, 2)
      );
    });
};

graphQLLoadTranslations();
