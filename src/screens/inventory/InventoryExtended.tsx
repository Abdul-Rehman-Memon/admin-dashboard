import { Button, Dialog, Modal } from "@mui/material";
import {
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

export const InventoryCustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};

// Receipt Rows

export const InventoryRowData: any = [
  {
    id: 1,
    Id: 1,
    "Supplier Name": "John Doe",
    "Transanction Amount": 50.25,
    City: "New York",
    Date: "2023-06-01",
    "Dispatched From": "Malir Godown, Karachi",
    "Receipt ID": "ABCD123",
  },
  {
    id: 2,
    Id: 2,
    "Supplier Name": "Jane Smith",
    "Transanction Amount": 75.5,
    City: "London",
    Date: "2023-05-28",
    "Dispatched From": "Gulberg Warehouse, Lahore",
    "Receipt ID": "EFGH456",
  },
  {
    id: 3,
    Id: 3,
    "Supplier Name": "Robert Johnson",
    "Transanction Amount": 123.75,
    City: "Los Angeles",
    Date: "2023-06-02",
    "Dispatched From": "Jubilee Town Warehouse, Lahore",
    "Receipt ID": "IJKL789",
  },
  {
    id: 4,
    Id: 4,
    "Supplier Name": "Emily Wilson",
    "Transanction Amount": 99.99,
    City: "Paris",
    Date: "2023-05-30",
    "Dispatched From": "Korangi Warehouse, Karachi",
    "Receipt ID": "MNOP123",
  },
  {
    id: 5,
    Id: 5,
    "Supplier Name": "Michael Brown",
    "Transanction Amount": 200.5,
    City: "Tokyo",
    Date: "2023-06-03",
    "Dispatched From": "Defence Warehouse, Karachi",
    "Receipt ID": "QRST456",
  },
  {
    id: 6,
    Id: 6,
    "Supplier Name": "Olivia Davis",
    "Transanction Amount": 150.75,
    City: "Sydney",
    Date: "2023-05-29",
    "Dispatched From": "Garden Town Warehouse, Lahore",
    "Receipt ID": "UVWX789",
  },
  {
    id: 7,
    Id: 7,
    "Supplier Name": "James Anderson",
    "Transanction Amount": 79.99,
    City: "Berlin",
    Date: "2023-06-04",
    "Dispatched From": "Saddar Warehouse, Karachi",
    "Receipt ID": "YZAB123",
  },
  {
    id: 8,
    Id: 8,
    "Supplier Name": "Sophia Taylor",
    "Transanction Amount": 88.5,
    City: "Rome",
    Date: "2023-06-06",
    "Dispatched From": "DHA Warehouse, Karachi",
    "Receipt ID": "LMNO123",
  },
  {
    id: 9,
    Id: 9,
    "Supplier Name": "William Moore",
    "Transanction Amount": 105.25,
    City: "Toronto",
    Date: "2023-05-31",
    "Dispatched From": "Model Colony Warehouse, Karachi",
    "Receipt ID": "CDEF456",
  },
  {
    id: 10,
    Id: 10,
    "Supplier Name": "Ava Wilson",
    "Transanction Amount": 65.5,
    City: "Mumbai",
    Date: "2023-06-05",
    "Dispatched From": "Liaquatabad Warehouse, Karachi",
    "Receipt ID": "GHJK789",
  },
  {
    id: 11,
    Id: 11,
    "Supplier Name": "Liam Turner",
    "Transanction Amount": 77.75,
    City: "Madrid",
    Date: "2023-06-03",
    "Dispatched From": "Tariq Road Warehouse, Karachi",
    "Receipt ID": "PQRS123",
  },
  {
    id: 12,
    Id: 12,
    "Supplier Name": "Harper Anderson",
    "Transanction Amount": 92.99,
    City: "Beijing",
    Date: "2023-06-04",
    "Dispatched From": "Clifton Warehouse, Karachi",
    "Receipt ID": "TUVW456",
  },
  {
    id: 13,
    Id: 13,
    "Supplier Name": "Logan Martinez",
    "Transanction Amount": 48.75,
    City: "Moscow",
    Date: "2023-06-02",
    "Dispatched From": "Gulistan-e-Johar Warehouse, Karachi",
    "Receipt ID": "XYZA789",
  },
  {
    id: 14,
    Id: 14,
    "Supplier Name": "Abigail Wilson",
    "Transanction Amount": 62.5,
    City: "Cairo",
    Date: "2023-06-07",
    "Dispatched From": "Bahadurabad Warehouse, Karachi",
    "Receipt ID": "BCDE123",
  },
  {
    id: 15,
    Id: 15,
    "Supplier Name": "Henry Johnson",
    "Transanction Amount": 110.25,
    City: "Melbourne",
    Date: "2023-06-08",
    "Dispatched From": "North Karachi Warehouse, Karachi",
    "Receipt ID": "FGHI456",
  },
  {
    id: 16,
    Id: 16,
    "Supplier Name": "Ella Davis",
    "Transanction Amount": 75.99,
    City: "Rio de Janeiro",
    Date: "2023-06-06",
    "Dispatched From": "Gulshan-e-Iqbal Warehouse, Karachi",
    "Receipt ID": "JKLM789",
  },
  {
    id: 17,
    Id: 17,
    "Supplier Name": "Daniel Thompson",
    "Transanction Amount": 88.5,
    City: "Bangkok",
    Date: "2023-06-01",
    "Dispatched From": "Nazimabad Warehouse, Karachi",
    "Receipt ID": "NPQR123",
  },
  {
    id: 18,
    Id: 18,
    "Supplier Name": "Grace Wilson",
    "Transanction Amount": 42.75,
    City: "Amsterdam",
    Date: "2023-06-03",
    "Dispatched From": "North Karachi Warehouse, Karachi",
    "Receipt ID": "STUV456",
  },
  {
    id: 19,
    Id: 19,
    "Supplier Name": "Ethan Thompson",
    "Transanction Amount": 42.99,
    City: "Singapore",
    Date: "2023-06-07",
    "Dispatched From": "North Nazimabad Warehouse, Karachi",
    "Receipt ID": "WXYZ123",
  },
  {
    id: 20,
    Id: 20,
    "Supplier Name": "Mia Garcia",
    "Transanction Amount": 95.75,
    City: "Seoul",
    Date: "2023-06-08",
    "Dispatched From": "Gulshan Warehouse, Karachi",
    "Receipt ID": "ABCD456",
  },
];

export const useInventoryColumnData: any = () => {
  const navigate = useNavigate();
  const handleButtonClick = (id: any) => {
    navigate("/supplier-ledger");
  };
  const InventoryColumnData = [
    { id: 1, width: "50", field: "Id" },
    { id: 2, width: "150", field: "Supplier Name" },
    { id: 3, width: "150", field: "Transanction Amount" },
    { id: 4, width: "150", field: "City" },
    { id: 5, width: "150", field: "Date" },
    { id: 6, width: "150", field: "Dispatched From" },
    { id: 7, width: "150", field: "Receipt ID" },
    {
      id: 8,
      width: "250",
      field: "Ledger",
      renderCell: (params: any) => (
        <Button
          style={{ color: "black", borderColor: "black !important" }}
          variant="contained"
          onClick={() => handleButtonClick(params.row.id)}
        >
          View Supplier Ledger
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
          variant="contained"
        >
          Print Receipt
        </Button>
      ),
    },
  ];

  return InventoryColumnData;
};
