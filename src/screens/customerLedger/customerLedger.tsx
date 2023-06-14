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
import { CustomerModal } from "./CustomerModal/customerModal";

export const CustomerLedger = () => {
  const customerInfo = useCustomerInfo();
  const customerName: any = customerInfo.customerName;
  const debitAmount: any = customerInfo.debitAmount;
  const columnData = useCustomerLedgerColumnData();
  const [customerColumnData, setcustomerColumnData]: any = useState(columnData);
  const [customerLegerRowData, setcustomerLegerRowData]: any = useState(
    customerLedgerRowData
  );

  let [IscustomerModal, setIscustomerModal] = useState(false);

  const handleOpenCustomerModal: any = () => {
    setIscustomerModal(true);
  };
  const handleCloseCustomerModal: any = () => {
    setIscustomerModal(false);
  };

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
            onClick={handleOpenCustomerModal}
          >
            Add Customer
          </Button>
          {IscustomerModal && (
            <CustomerModal
              open={IscustomerModal}
              handleClose={handleCloseCustomerModal}
            />
          )}
          <Button
            style={{ float: "right", margin: "0 0.5rem" }}
            variant="outlined"
          >
            Apply Filter
          </Button>
        </Col>
      </Row>
      <Row style={{ display: customerName ? "" : "none" }}>
        <Col xs={6}>
          <p
            style={{ float: "left", marginTop: "1rem" }}
          >{`Customer Name: ${customerName}`}</p>
        </Col>
        <Col xs={6}>
          <p
            style={{ float: "right", marginTop: "1rem" }}
          >{`Debit Amount: ${debitAmount} $`}</p>
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
