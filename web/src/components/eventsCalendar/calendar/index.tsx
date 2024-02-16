"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import Calendar from "@toast-ui/react-calendar";
import { theme } from "@/src/utils/theme";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  CalendarIcon,
} from "@heroicons/react/20/solid";
import { calendarTypes } from "@/src/data/calendar/calendarTypes";
import { calendarEvents } from "@/src/data/calendar/calendarEvents";
import { calendarViewModeOptions } from "@/src/data/calendar/calendarViews";

type ViewType = "month" | "week" | "day";
type actionNameType = "today" | "prev" | "next";

const CalendarView = ({ view }: { view: ViewType }) => {
  const calendarRef = useRef<typeof Calendar | any>(null);
  const [selectedDateRangeText, setSelectedDateRangeText] = useState("");
  const [selectedView, setSelectedView] = useState(view);

  const getCalInstance = useCallback(
    () => calendarRef.current?.getInstance?.(),
    []
  );

  const updateRenderRangeText = useCallback(() => {
    const calInstance = getCalInstance();
    if (!calInstance) {
      setSelectedDateRangeText("");
    }

    const viewName = calInstance.getViewName();
    const calDate = calInstance.getDate();
    const rangeStart = calInstance.getDateRangeStart();
    const rangeEnd = calInstance.getDateRangeEnd();

    let dateRangeText: string;

    switch (viewName) {
      case "month": {
        dateRangeText = new Intl.DateTimeFormat(
          Intl.DateTimeFormat().resolvedOptions().locale,
          {
            year: "numeric",
            month: "long",
          }
        ).format(calDate);
        break;
      }
      case "week": {
        dateRangeText = `${new Intl.DateTimeFormat(
          Intl.DateTimeFormat().resolvedOptions().locale,
          {
            year: "numeric",
            month: "short",
            day: "numeric",
          }
        ).format(rangeStart)} - ${new Intl.DateTimeFormat(
          Intl.DateTimeFormat().resolvedOptions().locale,
          {
            year: "numeric",
            month: "short",
            day: "numeric",
          }
        ).format(rangeEnd)}`;
        break;
      }
      default: {
        dateRangeText = `${new Intl.DateTimeFormat(
          Intl.DateTimeFormat().resolvedOptions().locale,
          {
            year: "numeric",
            month: "short",
            day: "numeric",
          }
        ).format(calDate)}`;
      }
    }

    setSelectedDateRangeText(dateRangeText);
  }, [getCalInstance]);

  useEffect(() => {
    setSelectedView(view);
  }, [view]);

  useEffect(() => {
    updateRenderRangeText();
  }, [selectedView, updateRenderRangeText]);

  const onChangeSelect = (ev: ViewType) => {
    setSelectedView(ev);
  };

  const onClickNavi = (action: actionNameType) => {
    getCalInstance()[action]();
    updateRenderRangeText();
  };

  return (
    <div className="w-full">
      <div className="w-full h-auto flex items-center justify-between mb-2">
        <div className="flex items-center justify-start w-max">
          <select
            name="select-view"
            defaultValue={view}
            onChange={(e) => onChangeSelect(e.target.value as ViewType)}
            className="rounded-lg w-56 h-12 bg-lilywhite border-2 border-black text-center text-lg font-semibold"
          >
            {calendarViewModeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.title}
              </option>
            ))}
          </select>

          <span className="ml-5 flex items-center justify-center w-max">
            <button
              type="button"
              data-action="move-prev"
              style={{ marginInline: "5px" }}
              onClick={() => onClickNavi("prev")}
              className="rounded-lg w-44 h-12 bg-lilywhite text-center text-lg font-semibold text-darkblue flex items-center justify-center"
            >
              <ArrowLeftCircleIcon className="w-6 h-6 mr-2" />
              Précédent
            </button>
            <button
              type="button"
              data-action="move-today"
              style={{ marginInline: "5px" }}
              onClick={() => onClickNavi("today")}
              className="rounded-lg w-44 h-12 bg-lilywhite text-center text-lg font-semibold text-darkblue flex items-center justify-center"
            >
              <CalendarIcon className="w-6 h-6 mr-2" />
              Today
            </button>

            <button
              type="button"
              style={{ marginInline: "5px" }}
              data-action="move-next"
              onClick={() => onClickNavi("next")}
              className="rounded-lg w-44 h-12 bg-lilywhite text-center text-lg font-semibold text-darkblue flex items-center justify-center"
            >
              Next
              <ArrowRightCircleIcon className="w-6 h-6 ml-2" />
            </button>
          </span>
        </div>
        <input
          type="text"
          value={selectedDateRangeText}
          readOnly
          className="w-[20rem] h-12 bg-lilywhite text-center text-lg font-semibold text-darkblue p-5 rounded-lg"
        />
      </div>
      <Calendar
        height="700px"
        calendars={calendarTypes}
        month={{ startDayOfWeek: 1 }}
        week={{
          startDayOfWeek: 1,
          eventView: true,
          taskView: true,
        }}
        events={calendarEvents}
        template={{
          milestone(event) {
            return `<span style="color: #fff; background-color: ${event.backgroundColor};">${event.title}</span>`;
          },
          allday(event) {
            return `[Jour entier] ${event.title}`;
          },
          task(event) {
            return `<i class="fa fa-tasks"></i> ${event.title}`;
          },
        }}
        theme={theme}
        useDetailPopup={true}
        // @ts-ignore
        useDetailSidebar={true}
        taskView={true}
        view={selectedView}
        gridSelection={false}
        // @ts-ignore
        ref={calendarRef}
      />
    </div>
  );
};

export { CalendarView };
