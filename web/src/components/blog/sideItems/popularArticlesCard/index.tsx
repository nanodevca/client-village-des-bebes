import { ReactNode } from "react";

const PopularArticlesCard = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="bg-lilywhite p-10 border border-gray-400 rounded-xl h-max">
        <h2 className="text-xl font-bold text-navyblue mb-8">
          Popular Articles
        </h2>
        {children}
      </div>
    </>
  );
};

export { PopularArticlesCard };
