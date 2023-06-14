import { Col, Container, Row } from "react-bootstrap";
import { DataGrid } from "@mui/x-data-grid";
import {
  transactionsArrayField,
  transactionsArray,
  shortcutsItems,
  lineChartdata,
  lineChartOptions,
  salesdata,
  Inventorydata,
  salesBifurcation,
  salesBifurcationOptions,
} from "./DashboardExtension";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  BarElement,
} from "chart.js";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export const Dashboard = () => {
  return (
    <Container fluid style={{ padding: "0.5rem !important " }}>
      <Row style={{ minHeight: "23rem" }}>
        <Col xs={3}>
          <div className="boxes">
            <h2>Sales By Product</h2>
            <Doughnut data={salesdata} style={{ margin: "auto" }} />
          </div>
        </Col>
        <Col xs={6}>
          <div className="boxes">
            <h2>Sales By Month</h2>
            <Line
              style={{ margin: "auto" }}
              data={lineChartdata}
              options={lineChartOptions}
            />
          </div>
        </Col>
        <Col xs={3}>
          <div className="boxes">
            <h2>Inventory</h2>
            <Pie style={{ margin: "auto" }} data={Inventorydata} />
          </div>
        </Col>
      </Row>
      <Row style={{ minHeight: "19rem" }}>
        <Col xs={6}>
          <div className="boxes" id="map-box">
            <h2> Sales By Region </h2>
            <ComposableMap>
              <ZoomableGroup center={[789, 30]} zoom={3}>
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#A4E5E0"
                        stroke="#0C6170"
                      />
                    ))
                  }
                </Geographies>
                <Marker coordinates={[789, 30]}>
                  <circle r={3} fill="#FF5533" />
                </Marker>
              </ZoomableGroup>
            </ComposableMap>
          </div>
        </Col>
        <Col xs={6}>
          <div className="boxes">
            <h2>Sales Bifurcation</h2>
            <Bar options={salesBifurcationOptions} data={salesBifurcation} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <div
            className="boxes"
            id="task-box"
            style={{ height: "30rem", overflow: "auto" }}
          >
            <h2>Recent Transaction</h2>
            <DataGrid
              style={{ height: "26rem" }}
              columns={transactionsArrayField}
              rows={transactionsArray}
            />
          </div>
        </Col>
        <Col xs={6}>
          <div className="boxes">
            <h2>Consignment Dates</h2>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDateTimePicker
                slotProps={{
                  shortcuts: {
                    items: shortcutsItems,
                  },
                  toolbar: { hidden: true },
                }}
              />
            </LocalizationProvider>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
