"use client";
import Calendar, { EventObject, Options } from "@toast-ui/calendar";
import { useEffect, useRef } from "react";

const WeekView = ({
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
    calendarRef.current = new Calendar("#weekCalendar", calendarConfig);
    initCalendarEvents();
  }, []);

  return <div id="weekCalendar"></div>;
};

export { WeekView };
