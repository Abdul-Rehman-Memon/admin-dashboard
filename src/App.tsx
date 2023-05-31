import "./App.css";
import { SidebarComponent } from "./components/SidebarComponent";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Sales } from "./screens/sales/Sales";
import { Dashboard } from "./screens/dashboard/Dashboard";
function App() {
  return (
    <div>
      <Header />
      <div className="app">
        <div id="sideBar">
          <SidebarComponent />
          {/* collapsed={collapsed} */}
        </div>
        <div id="routeBar">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sales" element={<Sales />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
