import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import { DataGrid } from "@mui/x-data-grid";
import {
  BootstrapInput,
  citiesName,
  customerNames,
  godownNames,
  productsTitle,
  salesInvoiceRowData,
} from "./InventoryModalExtended";
import { useState } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme: any) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export const InventoryModal = (props: any) => {
  React.useEffect(() => {
    console.log(props.invoice);
  }, [props.invoice]);
  const [salesInvoice, setSalesInvoice] = useState({
    supplierName: "",
    city: "",
    date: new Date(),
    receivedIn: "",
  });
  const handleSalesInvoice: any = (event: SelectChangeEvent) => {
    const { name, value } = event.target;

    setSalesInvoice((prevSalesInvoice) => ({
      ...prevSalesInvoice,
      [name]: value,
    }));
  };
  const [products, setProducts]: any = useState({
    "Product Name": "",
    Price: "",
    Quantity: "",
    Amount: "",
  });
  const handleProducts: any = async (event: SelectChangeEvent) => {
    let { name, value } = event.target;
    setProducts({ ...products, [name]: value });
  };

  const [inventoryReceiptRowsData, setInventoryReceiptRowsData] =
    useState<any[]>(salesInvoiceRowData);
  const [id, setId] = useState(1);

  let [InvoiceAmount, setInvoiceAmount]: any = useState(0);
  const handleAddProduct = async () => {
    const amount = await (Number(products.Price) * Number(products.Quantity));

    setId(id + 1);
    const newProduct = {
      id: id,
      ...products,
      Amount: amount,
    };
    setInvoiceAmount((InvoiceAmount += Number(amount)));

    setInventoryReceiptRowsData([...inventoryReceiptRowsData, newProduct]);

    setProducts({
      "Product Name": "",
      Price: "",
      Quantity: "",
      Amount: "",
    });
  };

  const handleAddSales = () => {
    setSalesInvoice({
      supplierName: "",
      city: "",
      date: new Date(),
      receivedIn: "",
    });
  };

  const eventHandlerFunction = (add?: boolean) => {
    props.handleClose();
    setSalesInvoice({
      supplierName: "",
      city: "",
      date: new Date(),
      receivedIn: "",
    });
    setProducts({
      "Product Name": "",
      Price: "",
      Quantity: "",
      Amount: "",
    });
    if (add) {
      handleAddSales();
    }
  };

  const HandleActionClick = async (param: any) => {
    const amount = await (Number(param.row.Price) * Number(param.row.Quantity));
    setInvoiceAmount((InvoiceAmount -= Number(amount)));
    console.log(InvoiceAmount);

    const updatedItems = inventoryReceiptRowsData.filter(
      (item: any) => item.id !== param.row.id
    );

    setInventoryReceiptRowsData(updatedItems);
  };

  const salesInvoiceColumnData: any = [
    { id: 1, field: "Product Name", width: "250" },
    { id: 2, field: "Price", width: "150" },
    { id: 3, field: "Quantity", width: "150" },
    { id: 4, field: "Amount", width: "150" },
    {
      id: 5,
      width: "150",
      field: "Action",
      renderCell: (params: any) => (
        <Button
          style={{ color: "black", borderColor: "black !important" }}
          variant="contained"
          onClick={() => HandleActionClick(params)}
        >
          Remove Item
        </Button>
      ),
    },
  ];

  return (
    <div>
      <BootstrapDialog
        style={{ maxWidth: "80vw !important" }}
        onClose={() => eventHandlerFunction(false)}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={() => eventHandlerFunction(false)}
        >
          Inventory Receipt
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Container>
            <Row>
              <Col xs={3}>
                <FormControl fullWidth>
                  <InputLabel id="customer-name-select-label">
                    Supplier Name
                  </InputLabel>
                  <Select
                    name={"supplierName"}
                    labelId="customer-name-select-label"
                    // id="customer-name-select"
                    size="small"
                    value={salesInvoice.supplierName}
                    label="Customer Ledger"
                    onChange={handleSalesInvoice}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {customerNames.map((name: any) => (
                      <MenuItem value={name} key={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Col>
              <Col xs={3}>
                <FormControl fullWidth>
                  <InputLabel id="city-select-label">City</InputLabel>
                  <Select
                    labelId="city-select-label"
                    name={"city"}
                    size="small"
                    value={salesInvoice.city}
                    label="City"
                    onChange={handleSalesInvoice}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {citiesName.map((name: any) => (
                      <MenuItem value={name} key={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Col>
              <Col xs={3}>
                <TextField
                  name={"date"}
                  size={"small"}
                  fullWidth={true}
                  label="Date"
                  value={salesInvoice.date}
                  id="outlined-size-normal"
                  onChange={handleSalesInvoice}
                />
              </Col>
              <Col xs={3}>
                <FormControl fullWidth>
                  <InputLabel id="godown-name-select-label">
                    Received In
                  </InputLabel>
                  <Select
                    name={"Dispatched"}
                    labelId="godown-name-select-label"
                    // id="customer-name-select"
                    size="small"
                    value={salesInvoice.receivedIn}
                    label="Dispatched From"
                    onChange={handleSalesInvoice}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {godownNames.map((name: any) => (
                      <MenuItem value={name} key={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Col>
            </Row>
            <Row>
              <Col xs={3}>
                <FormControl fullWidth>
                  <InputLabel id="product-select-label">Add Product</InputLabel>
                  <Select
                    name={"Product Name"}
                    labelId="product-select-label"
                    size="small"
                    value={products["Product Name"]}
                    label="Product Title"
                    onChange={handleProducts}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {productsTitle.map((name: any) => (
                      <MenuItem value={name.productName} key={name.productName}>
                        {name.productName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Col>
              <Col xs={3}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="product-select-native">Price</InputLabel>
                  <NativeSelect
                    name={"Price"}
                    id="product-select-native"
                    // id="customer-name-select"
                    size="small"
                    value={products.Price}
                    input={<BootstrapInput />}
                    onChange={handleProducts}
                  >
                    <option aria-label="None" value="" />
                    {productsTitle.map((name: any) => (
                      <option value={name.price} key={name.price}>
                        {name.price}
                      </option>
                    ))}
                  </NativeSelect>
                </FormControl>
              </Col>
              <Col xs={3}>
                <TextField
                  name={"Quantity"}
                  size={"small"}
                  fullWidth={true}
                  onChange={handleProducts}
                  value={products.Quantity}
                  label="Quatity"
                  id="outlined-size-normal"
                />
              </Col>

              <Col xs={3} id="add-btn">
                <Button
                  color="success"
                  style={{ color: "white !important" }}
                  variant="contained"
                  onClick={handleAddProduct}
                >
                  Add Item
                </Button>
              </Col>
            </Row>
            <Row>
              <DataGrid
                sx={{
                  borderColor: "black !important",
                  height: "20rem",
                  overflow: "auto",
                }}
                rows={inventoryReceiptRowsData}
                columns={salesInvoiceColumnData}
              />
            </Row>
            <Row>
              <Col>
                <p style={{ float: "left" }}> Total Receipt Amount </p>
              </Col>
              <Col>
                <p style={{ float: "right" }}>
                  {`${InvoiceAmount.toFixed(2)} $`}
                </p>
              </Col>
            </Row>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button autoFocus>Print Receipt</Button>
          <Button autoFocus onClick={() => eventHandlerFunction(true)}>
            Add Sales
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};
