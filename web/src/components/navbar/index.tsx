"use client";
import { Navbar } from "./navbar";
import { useEffect } from "react";

const Navbarwrapper = () => {
  useEffect(() => {
    const debounce = (fn: Function) => {
      let frame: number;
      return (...params: any[]) => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => fn(...params));
      };
    };

    const storeScroll = debounce(() => {
      document.documentElement.dataset.scroll = window.scrollY.toString();
    });

    document.addEventListener("scroll", storeScroll, { passive: true });

    storeScroll();

    return () => {
      document.removeEventListener("scroll", storeScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
};

export { Navbarwrapper };
