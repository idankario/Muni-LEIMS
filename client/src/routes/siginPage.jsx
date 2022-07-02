/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import PoolData from "./poolData";
import Logo from "../components/images/logoBody.png";
import { Login, StyledLink } from "../components/util/board";
import Header from "../components/header";
import { H_1 } from "../components/h1";
import Container from "../components/container";
import Shenkar from "../components/images/shenkar.png";
import { officebyId } from "../Api";

function SiginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    const user = new CognitoUser({
      Username: email,
      Pool: PoolData,
    });
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });
    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        async function storeOffice() {
          const id = await data.idToken.payload["custom:user_id"];
          const office = JSON.stringify(await officebyId(id));
          localStorage.setItem("office", await office);
          localStorage.setItem("user", await id);
          localStorage.setItem("token", await data.idToken.jwtToken);
          navigate("/homePage");
        }
        storeOffice();
      },
      onFailure: (err) => {
        console.error("onFailure:", err);
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired:", data);
      },
    });
  };
  return (
    <Container>
      <img
        style={{ position: "fixed", bottom: "10px" }}
        src={Shenkar}
        alt="Shenkar"
        title="Shenkar"
      />
      <Header />
      <Login onSubmit={onSubmit}>
        <img src={Logo} alt="logo" title="logo" />
        <H_1>Muni-LEIMS </H_1>
        <section>
          <AccountCircleIcon />
          <TextField
            autoComplete="on"
            type="USERNAME"
            placeholder="USERNAME"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            autoComplete="on"
            type={showPassword ? "text" : "password"}
            placeholder="PASSWORD"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit">LOGIN</Button>
          <StyledLink to="/signup">New user? Register Now</StyledLink>
        </section>
      </Login>
    </Container>
  );
}
export default SiginPage;
