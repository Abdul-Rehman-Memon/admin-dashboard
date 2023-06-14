import { DataGrid } from "@mui/x-data-grid";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Row, Col } from "react-bootstrap";
import {
  salesTransactionsColumn,
  salesTransactionsCustomToolbar,
  salesTransactionsRow,
} from "./cashFlowExtended";
import { InflowModal } from "./inflowModal/inflowModal";
import { OutflowModal } from "./outflowModal/outflowModal";
import { useState } from "react";
import { Button } from "@mui/material";

export const CashFlow = () => {
  const [inflowOpen, setInflowOpen]: any = useState(false);
  const [outflowOpen, setoutflowOpen]: any = useState(false);

  const handleInflowOpenModal = () => {
    setInflowOpen(true);
  };
  const handleInflowCloseModal = () => {
    setInflowOpen(false);
  };
  const handleOutflowOpenModal = () => {
    setoutflowOpen(true);
  };
  const handleOutflowCloseModal = () => {
    setoutflowOpen(false);
  };

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
        <Col xs={6}>
          <Button
            style={{ float: "right", margin: "0 0.5rem" }}
            variant="contained"
            onClick={handleInflowOpenModal}
          >
            Add Inflow
          </Button>
          <InflowModal open={inflowOpen} handleClose={handleInflowCloseModal} />
          <Button
            style={{ float: "right", margin: "0 0.5rem" }}
            variant="contained"
            onClick={handleOutflowOpenModal}
          >
            Add OutFlow
          </Button>
          <OutflowModal
            open={outflowOpen}
            handleClose={handleOutflowCloseModal}
          />
          <Button
            style={{ float: "right", margin: "0 0.5rem" }}
            variant="contained"
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
