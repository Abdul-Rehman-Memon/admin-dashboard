import { Button, Dialog, Modal } from "@mui/material";
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { SalesModal } from "./salesModal/SalesModal";
import { useState } from "react";

export const salesCustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};

// Sales Rows

export const salesRowData: any = [
  {
    id: 1,
    Id: 1,
    "Customer Name": "John Doe",
    "Invoice Amount": 50.25,
    "Cash Received": "-",
    "Debit Amount": 50.25,
    City: "New York",
    Date: "2023-06-01",
    "Dispatched From": "Malir Godown, Karachi",
    "Invoice ID": "ABCD123",
  },
  {
    id: 2,
    Id: 2,
    "Customer Name": "Jane Smith",
    "Invoice Amount": 75.5,
    "Cash Received": 45,
    "Debit Amount": 35.5,
    City: "London",
    Date: "2023-05-28",
    "Dispatched From": "Gulberg Warehouse, Lahore",
    "Invoice ID": "EFGH456",
  },
  {
    id: 3,
    Id: 3,
    "Customer Name": "Robert Johnson",
    "Invoice Amount": 123.75,
    "Cash Received": 123.75,
    "Debit Amount": "-",
    City: "Los Angeles",
    Date: "2023-06-02",
    "Dispatched From": "Jubilee Town Warehouse, Lahore",
    "Invoice ID": "IJKL789",
  },
  {
    id: 4,
    Id: 4,
    "Customer Name": "Emily Wilson",
    "Invoice Amount": 99.99,
    "Cash Received": 99.99,
    "Debit Amount": "-",
    City: "Paris",
    Date: "2023-05-30",
    "Dispatched From": "Korangi Warehouse, Karachi",
    "Invoice ID": "MNOP123",
  },
  {
    id: 5,
    Id: 5,
    "Customer Name": "Michael Brown",
    "Invoice Amount": 200.5,
    "Cash Received": 100,
    "Debit Amount": 100.5,
    City: "Tokyo",
    Date: "2023-06-03",
    "Dispatched From": "Defence Warehouse, Karachi",
    "Invoice ID": "QRST456",
  },
  {
    id: 6,
    Id: 6,
    "Customer Name": "Olivia Davis",
    "Invoice Amount": 150.75,
    "Cash Received": 150,
    "Debit Amount": 0.75,
    City: "Sydney",
    Date: "2023-05-29",
    "Dispatched From": "Garden Town Warehouse, Lahore",
    "Invoice ID": "UVWX789",
  },
  {
    id: 7,
    Id: 7,
    "Customer Name": "James Anderson",
    "Invoice Amount": 79.99,
    "Cash Received": 45,
    "Debit Amount": 34.99,
    City: "Berlin",
    Date: "2023-06-04",
    "Dispatched From": "Saddar Warehouse, Karachi",
    "Invoice ID": "YZAB123",
  },
  {
    id: 8,
    Id: 8,
    "Customer Name": "Sophia Taylor",
    "Invoice Amount": 88.5,
    "Cash Received": 45,
    "Debit Amount": 43.5,
    City: "Rome",
    Date: "2023-06-06",
    "Dispatched From": "DHA Warehouse, Karachi",
    "Invoice ID": "LMNO123",
  },
  {
    id: 9,
    Id: 9,
    "Customer Name": "William Moore",
    "Invoice Amount": 105.25,
    "Cash Received": 105.25,
    "Debit Amount": "-",
    City: "Toronto",
    Date: "2023-05-31",
    "Dispatched From": "Model Colony Warehouse, Karachi",
    "Invoice ID": "CDEF456",
  },
  {
    id: 10,
    Id: 10,
    "Customer Name": "Ava Wilson",
    "Invoice Amount": 65.5,
    "Cash Received": "-",
    "Debit Amount": 65.5,
    City: "Mumbai",
    Date: "2023-06-05",
    "Dispatched From": "Liaquatabad Warehouse, Karachi",
    "Invoice ID": "GHJK789",
  },
];
