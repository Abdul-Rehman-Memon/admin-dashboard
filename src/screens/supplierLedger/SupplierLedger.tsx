import { DataGrid } from "@mui/x-data-grid";
import { Col, Row } from "react-bootstrap";
import {
  supplierLegerRowData,
  supplierLegerCustomToolbar,
  useSupplierLegerColumnData,
} from "./supplierLedgerExtended";
import { useCreditorInfo } from "./supplierLedgerExtended";
import { useEffect, useState } from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SupplierModal } from "./supplierModal/supplierModal";
import { Button } from "@mui/material";

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

  let [IscustomerModal, setIscustomerModal] = useState(false);

  const handleOpenCustomerModal: any = () => {
    setIscustomerModal(true);
  };
  const handleCloseCustomerModal: any = () => {
    setIscustomerModal(false);
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
            variant="contained"
            onClick={handleOpenCustomerModal}
          >
            Add Supplier
          </Button>
          <SupplierModal
            open={IscustomerModal}
            handleClose={handleCloseCustomerModal}
          />
          <Button
            style={{ float: "right", margin: "0 0.5rem" }}
            variant="contained"
          >
            Apply Filter
          </Button>
        </Col>
      </Row>
      <Row style={{ display: creditorName ? "" : "none" }}>
        <Col xs={6}>
          <p
            style={{ float: "left", marginTop: "1rem" }}
          >{`Creditor Name: ${creditorName}`}</p>
        </Col>
        <Col xs={6}>
          <p
            style={{ float: "right", marginTop: "1rem" }}
          >{`Credit Amount: ${creditAmount} $`}</p>
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
