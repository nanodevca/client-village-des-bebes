import { ReactNode } from "react";

const SearchCard = () => {
  return (
    <>
      <div className="bg-lilywhite p-10 border border-gray-400 rounded-xl h-max">
        <h2 className="text-xl font-bold text-navyblue mb-4">
          Search articles
        </h2>
        <div>
          <form className="mx-auto max-w-xl pr-2 pl-6 py-2 rounded-full bg-white border flex justify-between focus-within:border-gray-400">
            <input
              type="text"
              placeholder="Search anything"
              className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0"
              name="search"
            />
            <button className="flex flex-row items-center justify-center px-4 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-navyblue text-white border-transparent h-[40px] py-1">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export { SearchCard };
