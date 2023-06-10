import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  customerLedgerColumnData,
  customerLedgerCustomToolbar,
  customerLedgerRowData,
} from "./customerLedgerExtended";

export const CustomerLedger = () => {
  return (
    <Container className="boxes-container">
      <Row></Row>
      <DataGrid
        rows={customerLedgerRowData}
        columns={customerLedgerColumnData}
        slots={{
          toolbar: customerLedgerCustomToolbar,
        }}
      />
    </Container>
  );
};
