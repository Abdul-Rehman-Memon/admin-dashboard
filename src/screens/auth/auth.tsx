import { useState } from "react";
import login from "./../../assets/login-screen.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Alert,
  Box,
  Button,
  SelectChangeEvent,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import { firebaseApp } from "../../bootstrap/login/appLogin";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { environment } from "../../bootstrap/environment/environment";
import { useLocation, useNavigate } from "react-router-dom";

export const Auth = () => {
  const navigate = useNavigate();
  const routeParam = useLocation();
  const [openSnackBar, setOpenSnackBar]: any = useState({
    value: "",
    option: false,
    vertical: "top",
    horizontal: "right",
    color: "success",
  });

  const [auth, setAuth]: any = useState({
    email: "",
    password: "",
    disable: true,
  });
  const handleAuthForm: any = (event: SelectChangeEvent) => {
    setAuth({
      ...auth,
      [event.target.name]: event.target.value,
    });
  };

  const handleSnackBarClose: any = () => {
    setOpenSnackBar({
      ...openSnackBar,
      option: false,
    });
  };
  const handleSetAuthForm = (event: any) => {
    if (
      event.type === "click" ||
      (event.type === "keyup" && event.key === "Enter")
    ) {
      console.log("worked");

      const authSubmit = getAuth(firebaseApp);
      signInWithEmailAndPassword(authSubmit, auth.email, auth.password)
        .then(async (userCredential: any) => {
          const user = userCredential.user;
          if (user) {
            await setOpenSnackBar({
              option: true,
              value: "Login Successful",
              vertical: "top",
              horizontal: "right",
              color: "success",
            });
            localStorage.setItem(environment.tokenKey, JSON.stringify(user));
            navigateToAdmin();
          }
        })
        .catch((error: any) => {
          if (error.message) {
            setOpenSnackBar({
              ...openSnackBar,
              option: true,
              value: error.message,
              vertical: "top",
              horizontal: "right",
              color: "error",
            });
          }
        });

      setAuth({
        email: "",
        password: "",
      });
    }
  };
  const navigateToAdmin = () => {
    if (routeParam.pathname === "/") {
      const token: any = localStorage.getItem(environment.tokenKey);
      if (token) {
        return navigate("/admin");
      }
    }
  };
  return (
    <Container fluid>
      <Snackbar
        open={openSnackBar.option}
        autoHideDuration={3000}
        onClose={handleSnackBarClose}
        anchorOrigin={{
          vertical: openSnackBar.vertical,
          horizontal: openSnackBar.horizontal,
        }}
      >
        <Alert
          onClose={handleSnackBarClose}
          severity={openSnackBar.color}
          sx={{ width: "100%" }}
        >
          {openSnackBar.value}
        </Alert>
      </Snackbar>
      <Row>
        <Col xs={6} id="login-img-box">
          <img src={login} alt="" height={"100%"} width={"100%"} />
        </Col>
        <Col xs={6} id="login-form-box">
          <Box
            sx={{
              margin: "1rem auto",
              width: 450,
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "2rem !important",
              }}
            >
              Sales And Inventory
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "1.25rem !important",
              }}
            >
              Management App
            </Typography>
          </Box>
          <Box
            sx={{
              margin: "0.5rem auto",
              width: 450,
              textAlign: "justify",
            }}
          >
            <Typography variant="body1">
              An AI-powered Sales and Inventory Management App Solution that
              addresses all your management challenges in sales and inventory,
              tailored to your company's format and procedures.
            </Typography>
          </Box>
          <Box
            sx={{
              margin: "3rem auto 0.5rem",
              width: 450,
            }}
          >
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="email"
              variant="filled"
              // error={!auth.email}
              onChange={handleAuthForm}
              name={"email"}
              value={auth.email}
              color="success"
            />
          </Box>
          <Box
            sx={{
              margin: "0.5rem auto 0rem",
              width: 450,
            }}
          >
            <TextField
              sx={{ width: "100%" }}
              id="filled-password-input"
              label="Password"
              onChange={handleAuthForm}
              type="password"
              autoComplete="current-password"
              variant="filled"
              // error={!auth.password && auth.password.length !== 8}
              name={"password"}
              value={auth.password}
              color="success"
            />
          </Box>
          <Box
            sx={{
              margin: "0rem auto",
              width: 450,
              textAlign: "right",
            }}
          >
            <Typography>Forgot Password?</Typography>
          </Box>
          <Box
            sx={{
              margin: ".5rem auto 1rem",
              width: 450,
            }}
          >
            <Button
              sx={{ width: "100%" }}
              variant="contained"
              onClick={handleSetAuthForm}
              onKeyUp={handleSetAuthForm}
            >
              Log in
            </Button>
            <Box
              sx={{
                margin: "1rem auto",
                width: 450,
              }}
            >
              <Typography>By Abdul Rehman Memon</Typography>
              <Typography>
                Full Stack Developer
                <a
                  href="https://www.linkedin.com/in/abdul-rehman-memon-575063193"
                  target="blank"
                >
                  <LinkedInIcon sx={{ float: "right" }} />
                </a>
              </Typography>
              <Typography>
                email: demo@test.com
                <span style={{ float: "right" }}> Password: 11223344 </span>
              </Typography>
            </Box>
          </Box>
        </Col>
      </Row>
    </Container>
  );
};
