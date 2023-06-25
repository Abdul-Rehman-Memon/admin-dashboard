import { Button } from "@mui/material";
import {
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
export const supplierLegerCustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};
export const supplierLegerRowData: any = [
  {
    id: 1,
    Id: 1,
    "Supplier Name": "John Doe",
    "Credit Amount": 50.25,
    City: "New York",
    Date: "2023-06-01",
  },
  {
    id: 2,
    Id: 2,
    "Supplier Name": "Jane Smith",
    "Credit Amount": 75.5,
    City: "London",
    Date: "2023-05-28",
  },
  {
    id: 3,
    Id: 3,
    "Supplier Name": "Robert Johnson",
    "Credit Amount": 123.75,
    City: "Los Angeles",
    Date: "2023-06-02",
  },
  {
    id: 4,
    Id: 4,
    "Supplier Name": "Emily Wilson",
    "Credit Amount": 99.99,
    City: "Paris",
    Date: "2023-05-30",
  },
  {
    id: 5,
    Id: 5,
    "Supplier Name": "Michael Brown",
    "Credit Amount": 200.5,
    City: "Tokyo",
    Date: "2023-06-03",
  },
  {
    id: 6,
    Id: 6,
    "Supplier Name": "Olivia Davis",
    "Credit Amount": 150.75,
    City: "Sydney",
    Date: "2023-05-29",
  },
  {
    id: 7,
    Id: 7,
    "Supplier Name": "James Anderson",
    "Credit Amount": 79.99,
    City: "Berlin",
    Date: "2023-06-04",
  },
  {
    id: 8,
    Id: 8,
    "Supplier Name": "Sophia Taylor",
    "Credit Amount": 88.5,
    City: "Rome",
    Date: "2023-06-06",
  },
  {
    id: 9,
    Id: 9,
    "Supplier Name": "William Moore",
    "Credit Amount": 105.25,
    City: "Toronto",
    Date: "2023-05-31",
  },
  {
    id: 10,
    Id: 10,
    "Supplier Name": "Ava Wilson",
    "Credit Amount": 65.5,
    City: "Mumbai",
    Date: "2023-06-05",
  },
  {
    id: 11,
    Id: 11,
    "Supplier Name": "Liam Turner",
    "Credit Amount": 77.75,
    City: "Madrid",
    Date: "2023-06-03",
  },
  {
    id: 12,
    Id: 12,
    "Supplier Name": "Harper Anderson",
    "Credit Amount": 92.99,
    City: "Beijing",
    Date: "2023-06-04",
  },
  {
    id: 13,
    Id: 13,
    "Supplier Name": "Logan Martinez",
    "Credit Amount": 48.75,
    City: "Moscow",
    Date: "2023-06-02",
  },
  {
    id: 14,
    Id: 14,
    "Supplier Name": "Abigail Wilson",
    "Credit Amount": 62.5,
    City: "Cairo",
    Date: "2023-06-07",
  },
  {
    id: 15,
    Id: 15,
    "Supplier Name": "Henry Johnson",
    "Credit Amount": 110.25,
    City: "Melbourne",
    Date: "2023-06-08",
  },
  {
    id: 16,
    Id: 16,
    "Supplier Name": "Ella Davis",
    "Credit Amount": 75.99,
    City: "Rio de Janeiro",
    Date: "2023-06-06",
  },
  {
    id: 17,
    Id: 17,
    "Supplier Name": "Daniel Thompson",
    "Credit Amount": 88.5,
    City: "Bangkok",
    Date: "2023-06-01",
  },
  {
    id: 18,
    Id: 18,
    "Supplier Name": "Grace Wilson",
    "Credit Amount": 42.75,
    City: "Amsterdam",
    Date: "2023-06-03",
  },
  {
    id: 19,
    Id: 19,
    "Supplier Name": "Ethan Thompson",
    "Credit Amount": 42.99,
    City: "Singapore",
    Date: "2023-06-07",
  },
  {
    id: 20,
    Id: 20,
    "Supplier Name": "Mia Garcia",
    "Credit Amount": 95.75,
    City: "Seoul",
    Date: "2023-06-08",
  },
];

export const useSupplierLegerColumnData: any = () => {
  const navigate = useNavigate();
  const supplierLegerColumnData: any = [
    { id: 1, width: "50", field: "Id" },
    { id: 2, width: "185", field: "Supplier Name" },
    { id: 3, width: "185", field: "Credit Amount" },
    { id: 4, width: "185", field: "City" },
    { id: 5, width: "185", field: "Date" },
    {
      id: 8,
      width: "200",
      field: "Ledger",
      renderCell: (params: any) => (
        <Btn btn={"supplier"} title={"View Ledger"} params={params} />
      ),
    },
    {
      id: 9,
      width: "200",
      field: "Products",
      renderCell: (params: any) => (
        <Btn btn={"Modal"} title={"View Products"} params={params} />
      ),
    },
  ];

  const Btn = (props: any) => {
    const HandleButtonClick = () => {
      if (props.btn === "supplier") {
        navigate(`/admin/supplier-ledger/${props.params.row.id}`);
      }
      if (props.btn === "Modal") {
        return;
      }
    };
    return (
      <Button
        style={{ color: "black", borderColor: "black !important" }}
        variant="text"
        onClick={() => HandleButtonClick()}
      >
        {props.title}
      </Button>
    );
  };
  return supplierLegerColumnData;
};

export const useCreditorInfo = () => {
  const navigate = useParams();
  let [creditorName, setcreditorName] = useState("");
  let [creditAmount, setcreditAmount] = useState(``);

  useEffect(() => {
    getCreditorName();
    getCreditorAmount();
  }, [navigate]);
  let getCreditorName: any = () => {
    const creditor = supplierLegerRowData.find((d: any) => d.id == navigate.id);

    if (navigate.id) {
      supplierLegerRowData.filter((d: any) =>
        d.id == navigate.id ? setcreditorName(d["Supplier Name"]) : ""
      );
      // setcreditorName(creditor["Supplier Name"]);
    }
    if (!navigate.id) {
      setcreditorName("");
    }
  };

  let getCreditorAmount: any = () => {
    if (navigate) {
      supplierLegerRowData.filter((d: any) =>
        d.id == navigate.id ? setcreditAmount(d["Credit Amount"]) : ""
      );
    }
    if (!navigate.id) {
      setcreditAmount("");
    }
  };

  return { creditorName, creditAmount, creditorsColumn, creditorsRows };
};
let creditorsRows = [
  {
    id: 1,
    Id: "S0001",
    "Transaction Type": "Cash Paid",
    "Transaction Amount": 500,
    Date: "2023-06-10",
    "Amount Paid": 500,
    "Amount Credited": "-",
  },
  {
    id: 2,
    Id: "S0001",
    "Transaction Type": "Goods Purchased",
    "Transaction Amount": 1000,
    Date: "2023-06-09",
    "Amount Paid": "-",
    "Amount Credited": 1000,
  },
  {
    id: 3,
    Id: "S0002",
    "Transaction Type": "Both",
    "Transaction Amount": 1500,
    Date: "2023-06-08",
    "Amount Paid": 1000,
    "Amount Credited": 500,
  },
  {
    id: 4,
    Id: "S0003",
    "Transaction Type": "Goods Purchased",
    "Transaction Amount": 2000,
    Date: "2023-06-07",
    "Amount Paid": "-",
    "Amount Credited": 2000,
  },
  {
    id: 5,
    Id: "S0003",
    "Transaction Type": "Goods Purchased",
    "Transaction Amount": 2000,
    Date: "2023-06-07",
    "Amount Paid": 1000,
    "Amount Credited": 2000,
  },
];

let creditorsColumn: any = [
  { id: 1, width: "50", field: "Id" },
  { id: 2, width: "185", field: "Transaction Type" },
  { id: 3, width: "185", field: "Transaction Amount" },
  { id: 4, width: "185", field: "Amount Paid" },
  { id: 5, width: "185", field: "Amount Credited" },
  {
    id: 8,
    width: "250",
    field: "Ledger",
    renderCell: (params: any) => (
      <Button
        style={{ color: "black", borderColor: "black !important" }}
        variant="text"
      >
        View products
      </Button>
    ),
  },
];
