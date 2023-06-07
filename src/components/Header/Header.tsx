import React, { useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { PersonAdd, Settings, Logout } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Tooltip,
  IconButton,
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Badge,
  TextField,
} from "@mui/material";
import { tabTitle } from "./HeaderExtended";
import { Col, Container, Row } from "react-bootstrap";
export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const openNotification = Boolean(anchorE2);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickNotification = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseNotification = () => {
    setAnchorE2(null);
  };

  return (
    <Container fluid id="header">
      <Row>
        <Col xs={2} id="pageTitleDiv">
          <p>{tabTitle}</p>
        </Col>
        <Col xs={{ span: "3", offset: "2" }}>
          {/* style={{ backgroundColor: "yellow" }} */}
          <TextField
            style={{ width: "100%", marginTop: "-0.5rem" }}
            label="Search"
            id="outlined-size-small"
            size="small"
          />
        </Col>
        <Col xs={{ span: "1", offset: "3" }}>
          <Box
            id="notificationBox"
            sx={{
              display: "flex",
              textAlign: "center",
            }}
          >
            <Tooltip title="Notifications">
              <IconButton
                onClick={handleClickNotification}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={
                  openNotification ? "notification-menu" : undefined
                }
                aria-haspopup="true"
                aria-expanded={openNotification ? "true" : undefined}
              >
                <Badge badgeContent={4}>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorE2}
            id="notification-menu"
            open={openNotification}
            onClose={handleCloseNotification}
            onClick={handleCloseNotification}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleCloseNotification}>
              Add another account
            </MenuItem>
            <MenuItem onClick={handleCloseNotification}>Settings</MenuItem>
            <MenuItem onClick={handleCloseNotification}>Logout</MenuItem>
          </Menu>
        </Col>
        <Col xs={1}>
          <Box
            id="user-icon-box"
            sx={{
              marginTop: "-1.25rem",
            }}
          >
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <AccountCircleIcon
                  sx={{ color: "#16171b", "font-size": "3.5rem" }}
                />
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> Profile
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Col>
      </Row>
    </Container>
  );
};
