import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Logo from "../components/images/logoBody.png";
import Shenkar from "../components/images/shenkar.png";
import { Login } from "../components/util/board";
import Header from "../components/header";
import { H_2 } from "../components/h2";
import Container from "../components/container";
import PoolData from "./poolData";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    PoolData.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
    });
  };
  return (
    <Container>
      <img
        style={{ position: "absolute", bottom: "30px" }}
        src={Shenkar}
        alt="Shenkar"
        title="Shenkar"
      />
      <Header />
      <Login>
        <img src={Logo} alt="logo" title="logo" />
        <H_2>Muni-LEIMS</H_2>

        <section>
          <AccountCircleIcon />
          <form onSubmit={onSubmit}>
            <TextField
              type="USERNAME"
              placeholder="USERNAME"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              type="PASSWORD"
              placeholder="PASSWORD"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button type="submit">SIGN UP!</Button>
          </form>
        </section>
      </Login>
    </Container>
  );
}
export default SignupPage;
