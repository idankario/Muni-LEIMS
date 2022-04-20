import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { TextField, Button } from "@mui/material";
import Logo from "../components/images/logo.svg";
import { Header, Login } from "../components/util/board";

function LoginPage() {
  return (
    <>
      <Header>
        <a href="/#">
          <span>Muni-LEIMS</span>
        </a>
      </Header>
      <Login>
        <img src={Logo} alt="logo" title="logo" />
        <h2>Muni-LEIMS</h2>
        <section>
          <AccountCircleIcon />
          <h2>USER LOGIN:</h2>
          <TextField type="USERNAME" placeholder="USERNAME" />
          <TextField type="PASSWORD" placeholder="PASSWORD" />
          <Button>LOGIN</Button>
        </section>
      </Login>
    </>
  );
}
export default LoginPage;
