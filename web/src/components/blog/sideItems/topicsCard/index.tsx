import { ReactNode } from "react";

const TopicsCard = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="bg-lilywhite p-10 border border-gray-400 rounded-xl">
        <h2 className="text-xl font-bold text-navyblue mb-8">Explore Topics</h2>
        <div className="flex flex-col gap-3">{children}</div>
      </div>
    </>
  );
};

export { TopicsCard };
