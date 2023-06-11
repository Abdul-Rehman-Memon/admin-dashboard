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
import { Link } from "react-router-dom";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
export const SidebarComponent = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  useEffect(() => {});
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
            icon={<CurrencyExchangeIcon />}
            component={<Link to="/cash-flow" />}
          >
            Cash Flows
          </MenuItem>
          <MenuItem
            icon={<ShoppingCartIcon />}
            component={<Link to="/sales" />}
          >
            Sales
          </MenuItem>
          <MenuItem
            icon={<PeopleIcon />}
            component={<Link to="/customer-ledger" />}
          >
            Customer
          </MenuItem>
          <MenuItem
            icon={<InventoryRoundedIcon />}
            component={<Link to="/inventory" />}
          >
            Inventory
          </MenuItem>
          <MenuItem
            icon={<LocalShippingIcon />}
            component={<Link to="/supplier-ledger" />}
          >
            Supplier
          </MenuItem>
          <MenuItem
            icon={<ManageAccountsIcon />}
            component={<Link to="/settings" />}
          >
            Setting
          </MenuItem>
          <MenuItem icon={<LogoutIcon />}> Logout </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};
