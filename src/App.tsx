import "./App.css";
import { SidebarComponent } from "./components/Sidebar/SidebarComponent";
import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Sales } from "./screens/sales/Sales";
import { Dashboard } from "./screens/dashboard/Dashboard";
import { Inventory } from "./screens/inventory/Inventory";
import { SupplierLedger } from "./screens/supplierLedger/SupplierLedger";
import { CustomerLedger } from "./screens/customerLedger/customerLedger";
import { CashFlow } from "./screens/cashFLow/cashFlow";
function App() {
  return (
    <div>
      <div className="app">
        <div id="sideBar">
          <SidebarComponent />
        </div>
        <div id="routeBar">
          <Header />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cash-flow" element={<CashFlow />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/customer-ledger" element={<CustomerLedger />} />
            <Route path="/customer-ledger/:id" element={<CustomerLedger />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/supplier-ledger" element={<SupplierLedger />} />
            <Route path="/supplier-ledger/:id" element={<SupplierLedger />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/sales" element={<Sales />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
