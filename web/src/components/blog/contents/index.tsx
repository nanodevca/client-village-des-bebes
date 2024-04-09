import { ReactNode } from "react";

const Contents = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="w-full lg:w-3/4 px-4">{children}</div>
    </>
  );
};

export { Contents };
