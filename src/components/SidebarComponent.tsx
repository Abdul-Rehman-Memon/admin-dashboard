import React from "react";
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
export const SidebarComponent = (props: any) => {
  // const [collapsed, setCollapsed] = React.useState(false);
  return (
    <>
      <Sidebar className="sidebar" collapsed={props.collapsed}>
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
          <MenuItem icon={<InventoryRoundedIcon />}> Inventory </MenuItem>
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
