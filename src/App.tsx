import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Auth } from "./screens/auth/auth";
import { Admin } from "./screens/admin/admin";
import { Dashboard } from "./screens/dashboard/Dashboard";
import { CashFlow } from "./screens/cashFLow/cashFlow";
import { Sales } from "./screens/sales/Sales";
import { CustomerLedger } from "./screens/customerLedger/customerLedger";
import { Inventory } from "./screens/inventory/Inventory";
import { SupplierLedger } from "./screens/supplierLedger/SupplierLedger";
import { Settings } from "./screens/settings/settings";
import { Protected } from "./bootstrap/protected/protected";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/admin" element={<Protected Component={Admin} />}>
          <Route
            path="dashboard"
            element={<Protected Component={Dashboard} />}
          />
          <Route
            path="cash-flow"
            element={<Protected Component={CashFlow} />}
          />
          <Route path="sales" element={<Sales />} />
          <Route
            path="customer-ledger"
            element={<Protected Component={CustomerLedger} />}
          />
          <Route
            path="customer-ledger/:id"
            element={<Protected Component={CustomerLedger} />}
          />
          <Route
            path="inventory"
            element={<Protected Component={Inventory} />}
          />
          <Route
            path="supplier-ledger"
            element={<Protected Component={SupplierLedger} />}
          />
          <Route
            path="supplier-ledger/:id"
            element={<Protected Component={SupplierLedger} />}
          />
          <Route path="settings" element={<Protected Component={Settings} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
