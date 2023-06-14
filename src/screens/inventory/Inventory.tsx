import { DataGrid } from "@mui/x-data-grid";
import { Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import {
  InventoryRowData,
  InventoryCustomToolbar,
  useInventoryColumnData,
} from "./InventoryExtended";
import { ProductModal } from "./productModal/productModal";
import { InventoryModal } from "./salesModal/InventoryModal";
export const Inventory = () => {
  const InventoryColumnData = useInventoryColumnData();
  const [openProduct, setOpenProduct] = React.useState(false);
  const handleProductOpen = () => {
    setOpenProduct(true);
    return;
  };
  const handlePrroductClose = () => {
    setOpenProduct(false);
  };
  const [openInventoryModal, setOpenInventoryModal] = React.useState(false);
  const handleInventoryOpen = () => {
    setOpenInventoryModal(true);
    return;
  };
  const handleInventoryClose = () => {
    setOpenInventoryModal(false);
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
            onClick={handleInventoryOpen}
          >
            Add Inventory
          </Button>
          <InventoryModal
            open={openInventoryModal}
            handleClose={handleInventoryClose}
          />
          <Button
            style={{ float: "right", margin: "0 0.5rem" }}
            variant="contained"
            onClick={handleProductOpen}
          >
            Add Product
          </Button>
          <ProductModal open={openProduct} handleClose={handlePrroductClose} />
          <Button
            style={{ float: "right", margin: "0 0.5rem" }}
            variant="contained"
          >
            Apply Filter
          </Button>
        </Col>
      </Row>
      <DataGrid
        rows={InventoryRowData}
        columns={InventoryColumnData}
        slots={{
          toolbar: InventoryCustomToolbar,
        }}
      />
    </div>
  );
};
