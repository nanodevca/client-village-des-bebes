import { atom, selector } from "recoil";

const currentLanguage = atom({
  key: "currentLanguage",
  default: ["en", "fr"].includes(
    new Intl.DateTimeFormat().resolvedOptions().locale.split("-")[0]
  )
    ? new Intl.DateTimeFormat().resolvedOptions().locale.split("-")[0]
    : "en",
});

const currentLanguageValue = selector({
  key: "currentLanguageValue", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const code = get(currentLanguage);

    return code;
  },
});

export { currentLanguage, currentLanguageValue };
