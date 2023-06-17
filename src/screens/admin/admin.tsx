import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { SidebarComponent } from "../../components/Sidebar/SidebarComponent";
import { Header } from "../../components/Header/Header";
import { CashFlow } from "../cashFLow/cashFlow";
import { CustomerLedger } from "../customerLedger/customerLedger";
import { Sales } from "../sales/Sales";
import { SupplierLedger } from "../supplierLedger/SupplierLedger";
import { Dashboard } from "../dashboard/Dashboard";
import { Inventory } from "../inventory/Inventory";
import { Settings } from "../settings/settings";
import { environment } from "../../bootstrap/environment/environment";
import { useEffect } from "react";

export const Admin = () => {
  const navigate = useNavigate();
  const routeParam = useLocation();
  useEffect(() => {
    navigateTodashboard();
  }, [routeParam]);

  const navigateTodashboard = () => {
    if (routeParam.pathname === "/admin") {
      navigate("/admin/dashboard");
    }
  };
  return (
    <div>
      <div>
        <div className="app">
          <div id="sideBar">
            <SidebarComponent />
          </div>
          <div id="routeBar">
            <Header />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
