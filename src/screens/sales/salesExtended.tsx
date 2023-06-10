import { Button, Dialog, Modal } from "@mui/material";
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

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
    "Transanction Amount": 50.25,
    City: "New York",
    Date: "2023-06-01",
    "Dispatched From": "Malir Godown, Karachi",
    "Invoice ID": "ABCD123",
  },
  {
    id: 2,
    Id: 2,
    "Customer Name": "Jane Smith",
    "Transanction Amount": 75.5,
    City: "London",
    Date: "2023-05-28",
    "Dispatched From": "Gulberg Warehouse, Lahore",
    "Invoice ID": "EFGH456",
  },
  {
    id: 3,
    Id: 3,
    "Customer Name": "Robert Johnson",
    "Transanction Amount": 123.75,
    City: "Los Angeles",
    Date: "2023-06-02",
    "Dispatched From": "Jubilee Town Warehouse, Lahore",
    "Invoice ID": "IJKL789",
  },
  {
    id: 4,
    Id: 4,
    "Customer Name": "Emily Wilson",
    "Transanction Amount": 99.99,
    City: "Paris",
    Date: "2023-05-30",
    "Dispatched From": "Korangi Warehouse, Karachi",
    "Invoice ID": "MNOP123",
  },
  {
    id: 5,
    Id: 5,
    "Customer Name": "Michael Brown",
    "Transanction Amount": 200.5,
    City: "Tokyo",
    Date: "2023-06-03",
    "Dispatched From": "Defence Warehouse, Karachi",
    "Invoice ID": "QRST456",
  },
  {
    id: 6,
    Id: 6,
    "Customer Name": "Olivia Davis",
    "Transanction Amount": 150.75,
    City: "Sydney",
    Date: "2023-05-29",
    "Dispatched From": "Garden Town Warehouse, Lahore",
    "Invoice ID": "UVWX789",
  },
  {
    id: 7,
    Id: 7,
    "Customer Name": "James Anderson",
    "Transanction Amount": 79.99,
    City: "Berlin",
    Date: "2023-06-04",
    "Dispatched From": "Saddar Warehouse, Karachi",
    "Invoice ID": "YZAB123",
  },
  {
    id: 8,
    Id: 8,
    "Customer Name": "Sophia Taylor",
    "Transanction Amount": 88.5,
    City: "Rome",
    Date: "2023-06-06",
    "Dispatched From": "DHA Warehouse, Karachi",
    "Invoice ID": "LMNO123",
  },
  {
    id: 9,
    Id: 9,
    "Customer Name": "William Moore",
    "Transanction Amount": 105.25,
    City: "Toronto",
    Date: "2023-05-31",
    "Dispatched From": "Model Colony Warehouse, Karachi",
    "Invoice ID": "CDEF456",
  },
  {
    id: 10,
    Id: 10,
    "Customer Name": "Ava Wilson",
    "Transanction Amount": 65.5,
    City: "Mumbai",
    Date: "2023-06-05",
    "Dispatched From": "Liaquatabad Warehouse, Karachi",
    "Invoice ID": "GHJK789",
  },
  {
    id: 11,
    Id: 11,
    "Customer Name": "Liam Turner",
    "Transanction Amount": 77.75,
    City: "Madrid",
    Date: "2023-06-03",
    "Dispatched From": "Tariq Road Warehouse, Karachi",
    "Invoice ID": "PQRS123",
  },
  {
    id: 12,
    Id: 12,
    "Customer Name": "Harper Anderson",
    "Transanction Amount": 92.99,
    City: "Beijing",
    Date: "2023-06-04",
    "Dispatched From": "Clifton Warehouse, Karachi",
    "Invoice ID": "TUVW456",
  },
  {
    id: 13,
    Id: 13,
    "Customer Name": "Logan Martinez",
    "Transanction Amount": 48.75,
    City: "Moscow",
    Date: "2023-06-02",
    "Dispatched From": "Gulistan-e-Johar Warehouse, Karachi",
    "Invoice ID": "XYZA789",
  },
  {
    id: 14,
    Id: 14,
    "Customer Name": "Abigail Wilson",
    "Transanction Amount": 62.5,
    City: "Cairo",
    Date: "2023-06-07",
    "Dispatched From": "Bahadurabad Warehouse, Karachi",
    "Invoice ID": "BCDE123",
  },
  {
    id: 15,
    Id: 15,
    "Customer Name": "Henry Johnson",
    "Transanction Amount": 110.25,
    City: "Melbourne",
    Date: "2023-06-08",
    "Dispatched From": "North Karachi Warehouse, Karachi",
    "Invoice ID": "FGHI456",
  },
  {
    id: 16,
    Id: 16,
    "Customer Name": "Ella Davis",
    "Transanction Amount": 75.99,
    City: "Rio de Janeiro",
    Date: "2023-06-06",
    "Dispatched From": "Gulshan-e-Iqbal Warehouse, Karachi",
    "Invoice ID": "JKLM789",
  },
  {
    id: 17,
    Id: 17,
    "Customer Name": "Daniel Thompson",
    "Transanction Amount": 88.5,
    City: "Bangkok",
    Date: "2023-06-01",
    "Dispatched From": "Nazimabad Warehouse, Karachi",
    "Invoice ID": "NPQR123",
  },
  {
    id: 18,
    Id: 18,
    "Customer Name": "Grace Wilson",
    "Transanction Amount": 42.75,
    City: "Amsterdam",
    Date: "2023-06-03",
    "Dispatched From": "North Karachi Warehouse, Karachi",
    "Invoice ID": "STUV456",
  },
  {
    id: 19,
    Id: 19,
    "Customer Name": "Ethan Thompson",
    "Transanction Amount": 42.99,
    City: "Singapore",
    Date: "2023-06-07",
    "Dispatched From": "North Nazimabad Warehouse, Karachi",
    "Invoice ID": "WXYZ123",
  },
  {
    id: 20,
    Id: 20,
    "Customer Name": "Mia Garcia",
    "Transanction Amount": 95.75,
    City: "Seoul",
    Date: "2023-06-08",
    "Dispatched From": "Gulshan Warehouse, Karachi",
    "Invoice ID": "ABCD456",
  },
];

export const useSalesColumnData: any = () => {
  const navigate = useNavigate();
  const handleButtonClickRoute = (id: any) => {
    return navigate("/customer-ledger");
  };
  const handleButtonClickModal = (id: any) => {
    return;
  };

  const salesColumnData = [
    { id: 1, width: "50", field: "Id" },
    { id: 2, width: "150", field: "Customer Name" },
    { id: 3, width: "150", field: "Transanction Amount" },
    { id: 4, width: "150", field: "City" },
    { id: 5, width: "150", field: "Date" },
    { id: 6, width: "150", field: "Dispatched From" },
    { id: 7, width: "150", field: "Invoice ID" },
    {
      id: 8,
      width: "250",
      field: "Ledger",
      renderCell: (params: any) => (
        <Button
          style={{ color: "black", borderColor: "black !important" }}
          variant="outlined"
          onClick={() => handleButtonClickRoute(params.row.id)}
        >
          View Customer Ledger
        </Button>
      ),
    },
    {
      id: 9,
      width: "250",
      field: "Transaction",
      renderCell: (params: any) => (
        <Button
          style={{ color: "black", borderColor: "black !important" }}
          variant="outlined"
          onClick={() => handleButtonClickModal(params.row.id)}
        >
          Print Invoice
        </Button>
      ),
    },
  ];
  return salesColumnData;
};
