import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, TextField } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import { DataGrid } from "@mui/x-data-grid";
import {
  salesInvoiceColumnData,
  salesInvoiceRowsData,
} from "./SalesModalExtended";

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

export const SalesModal = (props: any) => {
  // const [open, setOpen] = React.useState(false);

  React.useEffect(() => {});

  return (
    <div>
      <BootstrapDialog
        style={{ maxWidth: "80vw !important" }}
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={props.handleClose}
        >
          Sales Invoice
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Container>
            <Row>
              <Col xs={3}>
                <TextField
                  size={"small"}
                  fullWidth={true}
                  label="Customer Name"
                  id="outlined-size-normal"
                />
              </Col>
              <Col xs={3}>
                <TextField
                  size={"small"}
                  fullWidth={true}
                  label="City"
                  id="outlined-size-normal"
                />
              </Col>
              <Col xs={3}>
                <TextField
                  size={"small"}
                  fullWidth={true}
                  label="Date"
                  id="outlined-size-normal"
                />
              </Col>
              <Col xs={3}>
                <TextField
                  size={"small"}
                  fullWidth={true}
                  label="Dispatched From"
                  id="outlined-size-normal"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <TextField
                  size={"small"}
                  fullWidth={true}
                  label="Add Products"
                  id="outlined-size-normal"
                />
              </Col>
              <Col xs={2}>
                <TextField
                  size={"small"}
                  fullWidth={true}
                  label="Price"
                  id="outlined-size-normal"
                />
              </Col>
              <Col xs={2}>
                <TextField
                  size={"small"}
                  fullWidth={true}
                  label="Quatity"
                  id="outlined-size-normal"
                />
              </Col>
              <Col xs={2}>
                <TextField
                  size={"small"}
                  fullWidth={true}
                  label="Amount"
                  id="outlined-size-normal"
                />
              </Col>
              <Col xs={2} id="add-btn">
                <Button
                  color="success"
                  style={{ color: "white !important" }}
                  variant="contained"
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
                rows={salesInvoiceRowsData}
                columns={salesInvoiceColumnData}
              />
            </Row>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button autoFocus>Print Receipt</Button>
          <Button autoFocus onClick={props.handleClose}>
            Add Sales
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};
