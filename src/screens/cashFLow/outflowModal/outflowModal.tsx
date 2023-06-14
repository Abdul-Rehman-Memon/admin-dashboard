import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import React from "react";
import { Col, Container, Row } from "react-bootstrap";

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

export const OutflowModal = (props: any) => {
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
          Add Cash Outflow
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Container>
            <Row>
              <Col xs={12}>
                <TextField
                  name={"name"}
                  size={"small"}
                  fullWidth={true}
                  label="Name"
                  id="outlined-size-normal"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <TextField
                  name={"amount"}
                  size={"small"}
                  fullWidth={true}
                  label="Amount"
                  id="outlined-size-normal"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Col xs={12}>
                  <TextField
                    name={"purpose"}
                    size={"small"}
                    fullWidth={true}
                    label="Purpose"
                    id="outlined-size-normal"
                  />
                </Col>
              </Col>
            </Row>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.handleClose}>
            Add
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};
