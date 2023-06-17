// import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useTabTitle = () => {
  useEffect(() => {
    routeTitle();
  });
  const [tabTitle, settabTitle] = useState("");
  const location = useLocation();
  const currentRoute = location.pathname;
  const routeTitle: any = () => {
    switch (currentRoute) {
      case "/admin/dashboard":
        settabTitle("Dashboard");
        break;
      case "/admin/cash-flow":
        settabTitle("Cash Flow");
        break;
      case "/admin/sales":
        settabTitle("Sales");
        break;
      case "/admin/customer-ledger":
        settabTitle("Customer Ledger");
        break;
      case "/admin/inventory":
        settabTitle("Inventory");
        break;
      case "/admin/supplier-ledger":
        settabTitle("Supplier Ledger");
        break;
      case "/admin/settings":
        settabTitle("Settings");
        break;
    }
  };
  return tabTitle;
};
