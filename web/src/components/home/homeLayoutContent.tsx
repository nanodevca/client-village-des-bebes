"use client";

import { RecoilRoot } from "recoil";
import Footer from "../footer";
import { Navbarwrapper } from "../navbar";

const HomeLayoutContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <Navbarwrapper />
      {children}
      <Footer />
    </RecoilRoot>
  );
};

export { HomeLayoutContent };
