import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
export const customerLedgerCustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};
export const customerLedgerRowData: any = [
  {
    id: 1,
    Id: 1,
    "Customer Name": "John Doe",
    "Debit Amount": 50.25,
    City: "New York",
    Date: "2023-06-01",
  },
  {
    id: 2,
    Id: 2,
    "Customer Name": "Jane Smith",
    "Debit Amount": 75.5,
    City: "London",
    Date: "2023-05-28",
  },
  {
    id: 3,
    Id: 3,
    "Customer Name": "Robert Johnson",
    "Debit Amount": 123.75,
    City: "Los Angeles",
    Date: "2023-06-02",
  },
  {
    id: 4,
    Id: 4,
    "Customer Name": "Emily Wilson",
    "Debit Amount": 99.99,
    City: "Paris",
    Date: "2023-05-30",
  },
  {
    id: 5,
    Id: 5,
    "Customer Name": "Michael Brown",
    "Debit Amount": 200.5,
    City: "Tokyo",
    Date: "2023-06-03",
  },
  {
    id: 6,
    Id: 6,
    "Customer Name": "Olivia Davis",
    "Debit Amount": 150.75,
    City: "Sydney",
    Date: "2023-05-29",
  },
  {
    id: 7,
    Id: 7,
    "Customer Name": "James Anderson",
    "Debit Amount": 79.99,
    City: "Berlin",
    Date: "2023-06-04",
  },
  {
    id: 8,
    Id: 8,
    "Customer Name": "Sophia Taylor",
    "Debit Amount": 88.5,
    City: "Rome",
    Date: "2023-06-06",
  },
  {
    id: 9,
    Id: 9,
    "Customer Name": "William Moore",
    "Debit Amount": 105.25,
    City: "Toronto",
    Date: "2023-05-31",
  },
  {
    id: 10,
    Id: 10,
    "Customer Name": "Ava Wilson",
    "Debit Amount": 65.5,
    City: "Mumbai",
    Date: "2023-06-05",
  },
  {
    id: 11,
    Id: 11,
    "Customer Name": "Liam Turner",
    "Debit Amount": 77.75,
    City: "Madrid",
    Date: "2023-06-03",
  },
  {
    id: 12,
    Id: 12,
    "Customer Name": "Harper Anderson",
    "Debit Amount": 92.99,
    City: "Beijing",
    Date: "2023-06-04",
  },
  {
    id: 13,
    Id: 13,
    "Customer Name": "Logan Martinez",
    "Debit Amount": 48.75,
    City: "Moscow",
    Date: "2023-06-02",
  },
  {
    id: 14,
    Id: 14,
    "Customer Name": "Abigail Wilson",
    "Debit Amount": 62.5,
    City: "Cairo",
    Date: "2023-06-07",
  },
  {
    id: 15,
    Id: 15,
    "Customer Name": "Henry Johnson",
    "Debit Amount": 110.25,
    City: "Melbourne",
    Date: "2023-06-08",
  },
  {
    id: 16,
    Id: 16,
    "Customer Name": "Ella Davis",
    "Debit Amount": 75.99,
    City: "Rio de Janeiro",
    Date: "2023-06-06",
  },
  {
    id: 17,
    Id: 17,
    "Customer Name": "Daniel Thompson",
    "Debit Amount": 88.5,
    City: "Bangkok",
    Date: "2023-06-01",
  },
  {
    id: 18,
    Id: 18,
    "Customer Name": "Grace Wilson",
    "Debit Amount": 42.75,
    City: "Amsterdam",
    Date: "2023-06-03",
  },
  {
    id: 19,
    Id: 19,
    "Customer Name": "Ethan Thompson",
    "Debit Amount": 42.99,
    City: "Singapore",
    Date: "2023-06-07",
  },
  {
    id: 20,
    Id: 20,
    "Customer Name": "Mia Garcia",
    "Debit Amount": 95.75,
    City: "Seoul",
    Date: "2023-06-08",
  },
];

export const customerLedgerColumnData: any = [
  { id: 1, width: "50", field: "Id" },
  { id: 2, width: "185", field: "Customer Name" },
  { id: 3, width: "185", field: "Debit Amount" },
  { id: 4, width: "185", field: "City" },
  { id: 5, width: "185", field: "Date" },
  {
    id: 8,
    width: "250",
    field: "Ledger",
    renderCell: (params: any) => (
      <Btn
        btn={"Customer"}
        title={"View Customer Ledger"}
        params={params}
        url={"/Customer-ledger"}
      />
      //   <Button
      //     style={{ color: "black", borderColor: "black !important" }}
      //     variant="outlined"
      //     onClick={() => HandleButtonClick(params.row.id, "transaction")}
      //   >
      //     View Customer Ledger
      //   </Button>
    ),
  },
  {
    id: 9,
    width: "250",
    field: "Products",
    renderCell: (params: any) => (
      <Btn btn={"Modal"} title={"View Products"} params={params} />
    ),
  },
];

const Btn = (props: any) => {
  // const navigate = useNavigate();
  const HandleButtonClick = (e: any) => {
    console.log(props.btn);
    if (props.btn === "Customer") {
      return <Navigate to="/sales" />;
    }
    if (props.btn === "Modal") {
      return;
    }
  };
  return (
    <Button
      style={{ color: "black", borderColor: "black !important" }}
      variant="outlined"
      href={props.url}
      onClick={() => HandleButtonClick}
    >
      {props.title}
    </Button>
  );
};
