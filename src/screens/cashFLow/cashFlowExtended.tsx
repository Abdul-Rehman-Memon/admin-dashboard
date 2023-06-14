import {
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarExport,
} from "@mui/x-data-grid";

export const salesTransactionsRow: any = [
  {
    id: 1,
    ID: 1,
    Name: "John Doe",
    Amount: 100,
    Purpose: "Payment",
  },
  {
    id: 2,
    ID: 2,
    Name: "Jane Smith",
    Amount: 200,
    Purpose: "Purchase",
  },
  {
    id: 3,
    ID: 3,
    Name: "Alice Johnson",
    Amount: 50,
    Purpose: "Refund",
  },
  {
    id: 4,
    ID: 4,
    Name: "Mike Thompson",
    Amount: 75,
    Purpose: "Payment",
  },
  {
    id: 5,
    ID: 5,
    Name: "Emily Davis",
    Amount: 150,
    Purpose: "Purchase",
  },
  {
    id: 6,
    ID: 6,
    Name: "Robert Wilson",
    Amount: 30,
    Purpose: "Refund",
  },
];

export const salesTransactionsColumn: any = [
  { id: 1, field: "id" },
  { id: 2, field: "Name", width: 100 },
  { id: 3, field: "Amount", width: 100 },
  { id: 4, field: "Purpose", width: 100 },
];

export const salesTransactionsCustomToolbar: any = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};
