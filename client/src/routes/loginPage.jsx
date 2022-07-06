/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { useNavigate } from "react-router-dom";
import PoolData from "./poolData";
import Logo from "../components/images/logoBody.png";
import { Login } from "../components/util/board";
import Header from "../components/header";
import { H_1 } from "../components/h1";
import Container from "../components/container";
import Shenkar from "../components/images/shenkar.png";
import { officebyId } from "../Api";

function LoginPage() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
  }, []);

  const logIn = (email, password) => {
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
  const Jerusalem = () => {
    logIn(
      process.env.REACT_APP_USERNAME_JERUSALEM,
      process.env.REACT_APP_PASSWORD_JERUSALEM
    );
  };
  const Ashdod = () => {
    logIn(
      process.env.REACT_APP_USERNAME_Ashdod,
      process.env.REACT_APP_PASSWORD_Ashdod
    );
  };
  const KfarQara = () => {
    logIn(
      process.env.REACT_APP_USERNAME_KFARQARA,
      process.env.REACT_APP_PASSWORD_KFARQARA
    );
  };
  const MinistryofEnergy = () => {
    logIn(
      process.env.REACT_APP_USERNAME_MINISTRYOFENERGY,
      process.env.REACT_APP_PASSWORD_MINISTRYOFENERGY
    );
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
      <Login>
        <img src={Logo} alt="logo" title="logo" />
        <H_1>Muni-LEIMS </H_1>
        <section>
          <AccountCircleIcon />
          <Button onClick={() => KfarQara()}>Kfar Qara</Button>
          <Button onClick={() => Jerusalem()}>Jerusalem</Button>
          <Button onClick={() => Ashdod()}>Ashdod</Button>
          <Button onClick={() => MinistryofEnergy()}>Ministry of Energy</Button>
        </section>
      </Login>
    </Container>
  );
}
export default LoginPage;
