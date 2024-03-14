"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { mergeStyle } from "@/src/utils/functions";
import { Tab } from "@/src/types/activityTab";

const TabsCards = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div className="h-[20rem] md:h-[45rem] [perspective:1000px] relative b hidden lg:grid grid-cols-5 gap-4 mx-auto w-full items-start justify-start">
        <div
          className={mergeStyle(
            "flex flex-col items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full col-span-1",
            containerClassName
          )}
        >
          {propTabs.map((tab, idx) => (
            <button
              key={tab.title}
              onClick={() => {
                moveSelectedTabToTop(idx);
              }}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className={mergeStyle(
                "relative px-4 py-2 bg-pelorous hover:bg-navyblue w-full h-[50px] my-1 rounded-full",
                tabClassName
              )}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {active.value === tab.value && (
                <motion.div
                  layoutId="clickedbutton"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  className={mergeStyle(
                    "absolute inset-0 bg-navyblue rounded-full",
                    activeTabClassName
                  )}
                />
              )}

              <span
                className={`relative block text-lilywhite
                `}
              >
                {tab.title}
              </span>
            </button>
          ))}
        </div>
        <div className="col-span-4 w-full h-full">
          <FadeInDiv
            tabs={tabs}
            active={active}
            key={active.value}
            hovering={hovering}
            className={mergeStyle("", contentClassName)}
          />
        </div>
      </div>
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={mergeStyle(
            "w-full h-full absolute top-0 left-0",
            className
          )}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};

export { TabsCards };
