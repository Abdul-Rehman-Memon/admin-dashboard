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
      case "/dashboard":
        settabTitle("Dashboard");
        break;
      case "/cash-flow":
        settabTitle("Cash Flow");
        break;
      case "/sales":
        settabTitle("Sales");
        break;
      case "/customer-ledger":
        settabTitle("Customer Ledger");
        break;
      case "/inventory":
        settabTitle("Inventory");
        break;
      case "/supplier-ledger":
        settabTitle("Supplier Ledger");
        break;
      case "/settings":
        settabTitle("Settings");
        break;
    }
  };
  return tabTitle;
};
