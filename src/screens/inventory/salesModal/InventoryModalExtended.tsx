import { Button, InputBase, styled } from "@mui/material";
import { useState } from "react";

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    "background-color": "white ",
    left: "-7px",
    padding: "0 7px",
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: "16",
    padding: "7px 26px 8px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    "&:focus": {
      borderRadius: 4,
      // borderColor: "#80bdff",
    },
  },
}));

export const salesInvoiceRowData: any = [];

export const customerNames: any = [
  "Sophia",
  "Liam",
  "Olivia",
  "Noah",
  "Emma",
  "Jackson",
  "Ava",
  "Aiden",
  "Isabella",
  "Lucas",
];
// Array of City Names
export const citiesName = [
  "New York",
  "London",
  "Paris",
  "Tokyo",
  "Sydney",
  "Rome",
  "Dubai",
  "Rio de Janeiro",
  "Berlin",
  "Cape Town",
];

// Array of Product Names
export const productsTitle = [
  { productName: "iPhone", price: 999.99 },
  { productName: "Laptop", price: 1299.99 },
  { productName: "Camera", price: 499.99 },
  { productName: "Headphones", price: 99.99 },
  { productName: "Watch", price: 199.99 },
  { productName: "Shoes", price: 79.99 },
  { productName: "Backpack", price: 49.99 },
  { productName: "Gaming Console", price: 399.99 },
  { productName: "Sunglasses", price: 149.99 },
  { productName: "Bluetooth Speaker", price: 59.99 },
];

export const godownNames = [
  "Alpha Warehouse",
  "Prime Storage",
  "Global Logistics",
  "Mega Depot",
  "Secure Warehousing",
  "Supreme Stockroom",
  "Elite Distribution",
  "Central Warehouses",
  "Ultra Storage Solutions",
  "Premium Fulfillment",
];
