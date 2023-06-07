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
      backgroundColor: ["black", "#808080", "#a9a9a9", "#d3d3d3", "#dcdcdc"],
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
      borderColor: "black",
      tension: 0.1,
    },
    {
      label: ["Revenue"],
      data: [81, 56, 55, 40, 65, 59, 80],
      borderColor: "#d3d3d3",
      tension: 0.1,
    },
  ],
};
export const lineChartOptions: any = {
  plugins: {
    legend: {
      display: false, // Hide legend labels
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
      backgroundColor: ["black", "#808080", "#a9a9a9", "#d3d3d3", "#dcdcdc"],
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
      backgroundColor: ["black"],
    },
    {
      label: "Offline Sales",
      data: [45, 49, 50, 61, 16, 20, 30],
      backgroundColor: ["#a9a9a9"],
    },
    {
      label: "Total Sales",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: ["#d3d3d3"],
    },
  ],
};

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

// export const salesBifurcation = {
//   labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: [45, 49, 50, 61, 16, 20, 30],
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     {
//       label: "Dataset 2",
//       data: [45, 49, 50, 61, 16, 20, 30],
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//     },
//   ],
// };

export const salesBifurcationOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
