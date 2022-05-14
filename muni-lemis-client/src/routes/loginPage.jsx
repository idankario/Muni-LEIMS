import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Logo from "../components/images/logoBody.png";
import { Login } from "../components/util/board";
import Header from "../components/header";
import { H_2 } from "../components/h2";
import Body from "../components/body";

function LoginPage() {
  return (
    <Body>
      <Header />
      <Login>
        <img src={Logo} alt="logo" title="logo" />
        <H_2>Muni-LEIMS</H_2>
        <section>
          <AccountCircleIcon />
          <TextField type="USERNAME" placeholder="USERNAME" />
          <TextField type="PASSWORD" placeholder="PASSWORD" />
          <Button>LOGIN</Button>
        </section>
      </Login>
    </Body>
  );
}
export default LoginPage;
