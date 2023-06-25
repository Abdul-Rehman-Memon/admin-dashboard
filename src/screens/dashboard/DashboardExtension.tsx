import { PickersShortcutsItem } from "@mui/x-date-pickers/PickersShortcuts";
import dayjs, { Dayjs } from "dayjs";

export const transactionsArray = [
  {
    id: 1,
    Transaction: "Scheduling and managing meetings",
    Sales: 20,
    Receipt: "-",
  },
  {
    id: 3,
    Transaction: "Managing correspondence",
    Sales: "-",
    Receipt: 25,
  },
  {
    id: 2,
    Transaction: "Organizing and maintaining files",
    Sales: "-",
    Receipt: 15,
  },
  {
    id: 4,
    Transaction: "Data entry and record keeping",
    Sales: 10,
    Receipt: "-",
  },
  {
    id: 5,
    Transaction: "Managing calendars",
    Sales: 12,
    Receipt: "-",
  },
  {
    id: 6,
    Transaction: "Coordinating travel arrangements",
    Sales: "-",
    Receipt: 8,
  },
  {
    id: 7,
    Transaction: "Basic financial Transactions",
    Sales: 7,
    Receipt: "-",
  },
  {
    id: 8,
    Transaction: "Maintaining office supplies",
    Sales: "-",
    Receipt: 5,
  },
];

export const transactionsArrayField: any = [
  {
    field: "Transaction",
    width: 350,
  },
  {
    field: "Sales",
  },
  {
    field: "Receipt",
  },
];

// Date Chart

const getMonthWeekday = (
  monthIndex: number,
  weekdayIndex: number,
  dayRank: number
) => {
  // Helper to find for example the 3rd monday in Jun
  const today = dayjs();
  const firstDayOfMonth = today.month(monthIndex).startOf("month");
  const weekDay = firstDayOfMonth.day(); // 0 (Sunday) to 6 (Saturday)

  const deltaToFirstValidWeekDayInMonth =
    (weekDay > weekdayIndex ? 7 : 0) + weekdayIndex - weekDay;
  return firstDayOfMonth.add(
    (dayRank - 1) * 7 + deltaToFirstValidWeekDayInMonth,
    "day"
  );
};

export const shortcutsItems: PickersShortcutsItem<Dayjs | null>[] = [
  {
    label: "New Year's Day",
    getValue: () => {
      // (January 1)

      const today = dayjs();
      return today.month(0).date(1);
    },
  },
  {
    label: "Birthday of MLK Jr.",
    getValue: () => {
      // (third Monday in January)
      return getMonthWeekday(0, 1, 3);
    },
  },
  {
    label: "Independence Day",
    getValue: () => {
      // (July 4)

      const today = dayjs();
      return today.month(6).date(4);
    },
  },
  {
    label: "Labor Day",
    getValue: () => {
      // (first Monday in September)
      return getMonthWeekday(8, 1, 1);
    },
  },
  {
    label: "Thanksgiving Day",
    getValue: () => {
      // (fourth Thursday in November)
      return getMonthWeekday(10, 4, 4);
    },
  },
  {
    label: "Christmas Day",
    getValue: () => {
      // (December 25)

      const today = dayjs();
      return today.month(11).date(25);
    },
  },
];

// Sales by product Chart

export const salesdata: any = {
  labels: ["Socks", "T Shirts", "Pants", "Hats", "Eye Wear"],
  datasets: [
    {
      label: ["Socks", "T Shirts", "Pants", "Hats", "Eye Wear"],
      data: [50, 75, 68, 24, 48],
      backgroundColor: ["#0C6170", "#37BEB0", "#A4E5E0", "#DBF5F0", "#dcdcdc"],
      hoverOffset: 4,
    },
  ],
};

// Line Charts

export const lineChartdata: any = {
  labels: ["Jan", "Feb", "March", "April", "May", "June"],
  datasets: [
    {
      label: ["Sales"],
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: "#0C6170",
      backgroundColor: "#0C6170",
      tension: 0.1,
    },
    {
      label: ["Revenue"],
      data: [81, 56, 55, 40, 65, 59, 80],
      borderColor: "#37BEB0",
      backgroundColor: "#37BEB0",
      tension: 0.1,
    },
  ],
};
export const lineChartOptions: any = {
  plugins: {
    legend: {
      display: true, // Hide legend labels
    },
  },
};

// Inventory Stock Chart

export const Inventorydata: any = {
  labels: ["Socks", "T Shirts", "Pants", "Hats", "Eye Wear"],
  datasets: [
    {
      label: ["Socks", "T Shirts", "Pants", "Hats", "Eye Wear"],
      data: [50, 75, 68, 24, 48],
      backgroundColor: ["#0C6170", "#37BEB0", "#A4E5E0", "#DBF5F0", "#dcdcdc"],
      hoverOffset: 4,
    },
  ],
};

// Sales Bifurcation

export const salesBifurcation = {
  labels: ["Jan", "Feb", "Mar", "April", "May", "Jun", "July"],
  datasets: [
    {
      label: "Online Sales",
      data: [20, 18, 30, 20, 40, 35, 10],
      backgroundColor: ["#0C6170"],
    },
    {
      label: "Offline Sales",
      data: [45, 49, 50, 61, 16, 20, 30],
      backgroundColor: ["#37BEB0"],
    },
    {
      label: "Total Sales",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: ["#A4E5E0"],
    },
  ],
};

export const salesBifurcationOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
export const countries: any = [
  { name: "United States", coordinates: [37.0902, -95.7129] },
  { name: "Canada", coordinates: [56.1304, -106.3468] },
  { name: "United Kingdom", coordinates: [55.3781, -3.436] },
  { name: "Germany", coordinates: [51.1657, 10.4515] },
  { name: "France", coordinates: [46.2276, 2.2137] },
  // Add more countries as needed
];
