import React, { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import PeopleIcon from "@mui/icons-material/People";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
export const SidebarComponent = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = React.useState(true);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    return;
  };

  const location = useLocation();
  const currentRoute = location.pathname;

  useEffect(() => {});

  const menuItem = [
    {
      id: 1,
      icon: <DashboardCustomizeRoundedIcon />,
      route: "/admin/dashboard",
      title: "Dashboard",
    },
    {
      id: 2,
      icon: <CurrencyExchangeIcon />,
      route: "/admin/cash-flow",
      title: "Cash Flows",
    },
    {
      id: 3,
      icon: <ShoppingCartIcon />,
      route: "/admin/sales",
      title: "Sales",
    },
    {
      id: 4,
      icon: <PeopleIcon />,
      route: "/admin/customer-ledger",
      title: "Customer",
    },
    {
      id: 5,
      icon: <InventoryRoundedIcon />,
      route: "/admin/inventory",
      title: "Inventory",
    },
    {
      id: 6,
      icon: <LocalShippingIcon />,
      route: "/admin/supplier-ledger",
      title: "Supplier",
    },
    {
      id: 7,
      icon: <ManageAccountsIcon />,
      route: "/admin/settings",
      title: "Setting",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#37BEB0",
        height: "100vh",
        borderRight: "2px solid #A4E5E0",
      }}
    >
      <div id="collapse-btn">
        <button
          className="sb-button"
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        >
          <MenuIcon />
        </button>
      </div>
      <Sidebar className="sidebar" collapsed={collapsed}>
        <Menu>
          {menuItem.map((item: any) => (
            <MenuItem
              key={item.id}
              icon={item.icon}
              component={<Link to={item.route} />}
              className={currentRoute === item.route ? "active" : ""}
            >
              {item.title}
            </MenuItem>
          ))}
          {/*<MenuItem
            icon={<CurrencyExchangeIcon />}
            component={<Link to="/admin/cash-flow" />}
          >
            Cash Flows
          </MenuItem>
          <MenuItem
            icon={<ShoppingCartIcon />}
            component={<Link to="/admin/sales" />}
          >
            Sales
          </MenuItem>
          <MenuItem
            icon={<PeopleIcon />}
            component={<Link to="/admin/customer-ledger" />}
          >
            Customer
          </MenuItem>
          <MenuItem
            icon={<InventoryRoundedIcon />}
            component={<Link to="/admin/inventory" />}
          >
            Inventory
          </MenuItem>
          <MenuItem
            icon={<LocalShippingIcon />}
            component={<Link to="/admin/supplier-ledger" />}
          >
            Supplier
          </MenuItem>
          <MenuItem
            icon={<ManageAccountsIcon />}
            component={<Link to="/admin/settings" />}
          >
            Setting
          </MenuItem> */}
          <div onClick={handleLogout}>
            <MenuItem icon={<LogoutIcon />}>Logout</MenuItem>
          </div>
        </Menu>
      </Sidebar>
    </div>
  );
};
