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
      <div className="w-full overflow-hidden relative h-full rounded-2xl px-7 py-5 text-xl md:text-2xl font-bold bg-navyblue text-lilywhite">
        <p className="mb-5">{title}</p>
        <div
          className={mergeStyle(
            "grid md:auto-rows-[19rem] grid-cols-1 md:grid-cols-3 gap-2 max-w-7xl mx-auto",
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
