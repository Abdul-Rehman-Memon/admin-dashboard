import "./App.css";
import { SidebarComponent } from "./components/Sidebar/SidebarComponent";
import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Sales } from "./screens/sales/Sales";
import { Dashboard } from "./screens/dashboard/Dashboard";
import { Inventory } from "./screens/inventory/Inventory";
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
            <Route path="/sales" element={<Sales />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/sales" element={<Sales />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
