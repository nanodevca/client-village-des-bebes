"use client";
import { atom, selector } from "recoil";
import { AlbumsFilters } from "../types/memories";

const baseFilters: AlbumsFilters = [
  { label: "all", isChecked: false },
  { label: "activity_conte", isChecked: false },
  { label: "laval_mosaic_festival", isChecked: false },
  { label: "baby_village_launch", isChecked: false },
  { label: "black_women_salon", isChecked: false },
];

const filters = atom({
  key: "filters",
  default: baseFilters,
});

const filtersValue = selector({
  key: "filtersValue", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const filter = get(filters);

    return filter;
  },
});

const currentFilter = atom({
  key: "currentFilter",
  default: "all",
});

const currentFilterValue = selector({
  key: "currentFilterValue", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const filter = get(currentFilter);

    return filter;
  },
});

export { currentFilter, currentFilterValue, filters, filtersValue };
