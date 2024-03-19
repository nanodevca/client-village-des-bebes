"use client";
import { PrimaryFilterCard } from "../primaryFilterCard";
import { Drawer as DrawerPrimitive } from "vaul";
import { mergeStyle } from "@/src/utils/functions";

const PrimaryFilter = ({
  galleryData,
  filters,
}: {
  galleryData: any;
  filters: any;
}) => {
  return (
    <>
      <div className="w-full px-10 py-5 grid grid-cols-2 lg:grid-cols-4 lg:gap-y-10 lg:gap-x-5">
        <PrimaryFilterCard />
        <PrimaryFilterCard />
        <PrimaryFilterCard />
        <PrimaryFilterCard />
        <PrimaryFilterCard />
        <PrimaryFilterCard />
      </div>
    </>
  );
};

export { PrimaryFilter };
