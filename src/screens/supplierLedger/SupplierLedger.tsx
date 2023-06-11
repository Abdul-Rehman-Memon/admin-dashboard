import { DataGrid } from "@mui/x-data-grid";
import { Button, Col, Row } from "react-bootstrap";
import {
  supplierLegerRowData,
  supplierLegerCustomToolbar,
  useSupplierLegerColumnData,
} from "./supplierLedgerExtended";
import { useCreditorInfo } from "./supplierLedgerExtended";
import { useEffect, useState } from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const SupplierLedger = () => {
  const creditorInfo = useCreditorInfo();
  const creditorName: any = creditorInfo.creditorName;
  const creditAmount: any = creditorInfo.creditAmount;
  const suppliercolumnData = useSupplierLegerColumnData();

  const [supplierLegerColumnData, setsupplierLegerColumnData]: any =
    useState(suppliercolumnData);
  const [supplierLegerRowDatas, setsupplierLegerRowDatas]: any =
    useState(supplierLegerRowData);

  useEffect(() => {
    checkUser();
  }, [creditorName]);

  let checkUser = () => {
    if (creditorName) {
      setsupplierLegerColumnData(creditorInfo.creditorsColumn);
      setsupplierLegerRowDatas(creditorInfo.creditorsRows);
    } else {
      setsupplierLegerColumnData(suppliercolumnData);
      setsupplierLegerRowDatas(supplierLegerRowData);
    }
  };

  return (
    <div className="boxes-container">
      <Row style={{ display: creditorName ? "" : "none" }}>
        <Col xs={6}>
          <h3
            style={{ float: "left", marginTop: "1rem" }}
          >{`Creditor Name: ${creditorName}`}</h3>
        </Col>
        <Col xs={6}>
          <h3
            style={{ float: "right", marginTop: "1rem" }}
          >{`Credit Amount: ${creditAmount} $`}</h3>
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
          <Button
            style={{ float: "right", margin: "0 0.5rem" }}
            variant="outlined"
          >
            Apply Filter
          </Button>
        </Col>
      </Row>
      <DataGrid
        rows={supplierLegerRowDatas}
        columns={supplierLegerColumnData}
        slots={{
          toolbar: supplierLegerCustomToolbar,
        }}
      />
    </div>
  );
};
