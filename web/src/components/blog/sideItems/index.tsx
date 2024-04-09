import { ReactNode } from "react";

const SideItems = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="w-full lg:w-1/4 flex flex-col space-y-4 justify-start p-5">
        {children}
      </div>
    </>
  );
};

export { SideItems };
