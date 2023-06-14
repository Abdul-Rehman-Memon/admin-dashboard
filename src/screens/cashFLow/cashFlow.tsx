import { DataGrid } from "@mui/x-data-grid";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Row, Col, Button } from "react-bootstrap";
import {
  salesTransactionsColumn,
  salesTransactionsCustomToolbar,
  salesTransactionsRow,
} from "./cashFlowExtended";

export const CashFlow = () => {
  return (
    <div className="boxes-container">
      <Row>
        <Col xs={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{ width: "100%" }}
              label="Start Date"
              slotProps={{ textField: { size: "small" } }}
            />
          </LocalizationProvider>
        </Col>
        <Col xs={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{ width: "100%" }}
              label="End Date"
              slotProps={{ textField: { size: "small" } }}
            />
          </LocalizationProvider>
        </Col>
        <Col xs={3}></Col>
        <Col xs={3}>
          <Button
            style={{ float: "right", margin: "0 0.5rem" }}
            variant="outlined"
          >
            Add Sales
          </Button>
          <Button
            style={{ float: "right", margin: "0 0.5rem" }}
            variant="outlined"
          >
            Apply Filter
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <h2>Cash Inflow</h2>
          <DataGrid
            rows={salesTransactionsRow}
            columns={salesTransactionsColumn}
            slots={{
              toolbar: salesTransactionsCustomToolbar,
            }}
          />
        </Col>
        <Col xs={6}>
          <h2>Cash Ouflow</h2>
          <DataGrid
            rows={salesTransactionsRow}
            columns={salesTransactionsColumn}
            slots={{
              toolbar: salesTransactionsCustomToolbar,
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
