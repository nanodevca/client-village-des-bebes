import { mergeStyle } from "@/src/utils/functions";
import { ActivityCard } from "../activityCard";
import { Activity } from "@/src/types/activity";

const TabCard = ({
  title,
  className,
  activities,
}: {
  title: string;
  className?: string;
  activities: Activity[];
}) => {
  return (
    <>
      <div className="w-full overflow-hidden relative lg:h-[45rem] h-[65rem] sm:h-[60rem] rounded-2xl px-7 py-5 text-xl md:text-2xl font-bold bg-navyblue text-lilywhite">
        <p className="mb-5">{title}</p>
        <div
          className={mergeStyle(
            "grid lg:auto-rows-[19rem] grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto",
            className
          )}
        >
          {activities.map((item, x) => (
            <ActivityCard
              key={x}
              index={x}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              duration={item.duration}
              price={item.price}
              public={item.public}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export { TabCard };
