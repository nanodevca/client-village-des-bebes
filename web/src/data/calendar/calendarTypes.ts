import { Options } from "@toast-ui/calendar/*";

const calendarTypes: Options["calendars"] = [
  {
    id: "0",
    name: "Private",
    backgroundColor: "#9e5fff",
    borderColor: "#9e5fff",
    dragBackgroundColor: "#9e5fff",
  },
  {
    id: "1",
    name: "Company",
    backgroundColor: "#00a9ff",
    borderColor: "#00a9ff",
    dragBackgroundColor: "#00a9ff",
  },
];

export { calendarTypes };
