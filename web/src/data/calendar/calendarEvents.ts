import type { EventObject } from "@toast-ui/calendar";
import { addDate, addHours, subtractDate } from "@/src/utils/functions";
import { TZDate } from "@toast-ui/calendar";

const today = new TZDate();

const calendarEvents: Partial<EventObject>[] = [
  {
    id: "1",
    calendarId: "0",
    title: "Test event",
    category: "time",
    start: today,
    end: addHours(today, 3),
    isReadOnly: true,
  },
  {
    id: "2",
    calendarId: "1",
    title: "Practice session",
    category: "time",
    start: addDate(today, 1),
    end: addDate(today, 1),
    isReadOnly: true,
  },
  {
    id: "3",
    calendarId: "0",
    title: "Workshop day",
    category: "allday",
    start: subtractDate(today, 2),
    end: subtractDate(today, 1),
    isReadOnly: true,
  },
  {
    id: "4",
    calendarId: "1",
    title: "Report",
    category: "time",
    start: today,
    end: addHours(today, 1),
    isReadOnly: true,
  },
];

export { calendarEvents };
