import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { SidebarComponent } from "../../components/Sidebar/SidebarComponent";
import { Header } from "../../components/Header/Header";
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
