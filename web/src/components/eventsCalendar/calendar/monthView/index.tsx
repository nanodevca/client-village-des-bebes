"use client";
import Calendar, { EventObject, Options } from "@toast-ui/calendar";
import { useEffect, useRef } from "react";

const MonthView = ({
  calendarConfig,
  calendarEvents,
}: {
  calendarConfig: Options;
  calendarEvents: EventObject[];
}) => {
  const calendarRef = useRef<Calendar | null>(null);

  const initCalendarEvents = () => {
    if (calendarRef.current) {
      calendarRef.current.createEvents(calendarEvents);
    }
  };

  useEffect(() => {
    calendarRef.current = new Calendar("#monthCalendar", calendarConfig);
    initCalendarEvents();
  }, []);

  return <div id="monthCalendar"></div>;
};

export { MonthView };
