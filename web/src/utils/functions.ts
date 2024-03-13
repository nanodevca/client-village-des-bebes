import { TZDate } from "@toast-ui/calendar";
import translations from "@/src/assets/translations/translations.json";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function clone(date: TZDate): TZDate {
  return new TZDate(date);
}

export function addHours(d: TZDate, step: number) {
  const date = clone(d);
  date.setHours(d.getHours() + step);

  return date;
}

export function addDate(d: TZDate, step: number) {
  const date = clone(d);
  date.setDate(d.getDate() + step);

  return date;
}

export function subtractDate(d: TZDate, steps: number) {
  const date = clone(d);
  date.setDate(d.getDate() - steps);

  return date;
}

export const getTranslation = (): typeof translations => {
  return translations;
};

export const mergeStyle = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
