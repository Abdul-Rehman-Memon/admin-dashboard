import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  supplierLegerRowData,
  supplierLegerColumnData,
  supplierLegerCustomToolbar,
} from "./supplierLedgerExtended";

export const SupplierLedger = () => {
  return (
    <Container className="boxes-container">
      <Row></Row>
      <DataGrid
        rows={supplierLegerRowData}
        columns={supplierLegerColumnData}
        slots={{
          toolbar: supplierLegerCustomToolbar,
        }}
      />
    </Container>
  );
};
