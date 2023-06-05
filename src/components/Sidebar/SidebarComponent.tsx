import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PeopleIcon from "@mui/icons-material/People";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export const SidebarComponent = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <>
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
          <MenuItem
            icon={<DashboardCustomizeRoundedIcon />}
            component={<Link to="/dashboard" />}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            icon={<MonetizationOnIcon />}
            component={<Link to="/sales" />}
          >
            Sales
          </MenuItem>
          <MenuItem
            icon={<InventoryRoundedIcon />}
            component={<Link to="/inventory" />}
          >
            Inventory
          </MenuItem>
          <MenuItem icon={<AssessmentIcon />}> Reports </MenuItem>
          <MenuItem icon={<PeopleIcon />}> Customer </MenuItem>
          <MenuItem icon={<MoneyOffIcon />}> Creditor </MenuItem>
          <MenuItem icon={<ManageAccountsIcon />}> Setting </MenuItem>
          <MenuItem icon={<LogoutIcon />}> Logout </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};
