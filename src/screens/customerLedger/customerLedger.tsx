import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  useCustomerLedgerColumnData,
  customerLedgerCustomToolbar,
  customerLedgerRowData,
  useCustomerInfo,
} from "./customerLedgerExtended";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const CustomerLedger = () => {
  const customerInfo = useCustomerInfo();
  const customerName: any = customerInfo.customerName;
  const debitAmount: any = customerInfo.debitAmount;
  const columnData = useCustomerLedgerColumnData();
  const [customerColumnData, setcustomerColumnData]: any = useState(columnData);
  const [customerLegerRowData, setcustomerLegerRowData]: any = useState(
    customerLedgerRowData
  );

  useEffect(() => {
    checkUser();
  }, [customerName]);

  let checkUser = () => {
    if (customerName) {
      console.log({ customerName });

      setcustomerColumnData(customerInfo.customersColumn);
      setcustomerLegerRowData(customerInfo.customersRows);
    }
    if (!customerName) {
      console.log("customerName");

      setcustomerColumnData(columnData);
      setcustomerLegerRowData(customerLedgerRowData);
    }
  };

  return (
    <div className="boxes-container">
      <Row style={{ display: customerName ? "" : "none" }}>
        <Col xs={6}>
          <h3
            style={{ float: "left", marginTop: "1rem" }}
          >{`Customer Name: ${customerName}`}</h3>
        </Col>
        <Col xs={6}>
          <h3
            style={{ float: "right", marginTop: "1rem" }}
          >{`Debit Amount: ${debitAmount} $`}</h3>
        </Col>
      </Row>
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
          {/* <Button
            style={{ float: "right", margin: "0 0.5rem" }}
            variant="outlined"
            onClick={handleClickOpen}
          >
            Add Sales
          </Button> */}
          {/* <SalesModal open={open} handleClose={handleClose} /> */}
          <Button
            style={{ float: "right", margin: "0 0.5rem" }}
            variant="outlined"
          >
            Apply Filter
          </Button>
        </Col>
      </Row>
      <DataGrid
        rows={customerLegerRowData}
        columns={customerColumnData}
        slots={{
          toolbar: customerLedgerCustomToolbar,
        }}
      />
    </div>
  );
};
