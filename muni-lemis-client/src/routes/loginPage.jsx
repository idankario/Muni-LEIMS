<<<<<<< HEAD
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Logo from "../components/images/logo.svg";
import { Login } from "../components/util/board";
import Header from "../components/header";
import { H_2 } from "../components/h2";
=======
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { TextField, Button } from '@mui/material';
import Logo from 'components/images/logo.svg';
import { Header, Login } from 'components/util/board';
>>>>>>> d575c30f48cb674b8f3f5faa4782b648122fa246

function LoginPage() {
  return (
    <>
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
    </>
  );
}
export default LoginPage;
