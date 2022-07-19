/* eslint-disable camelcase */
/* eslint-disable no-console */
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import PoolData from "./poolData";
import Logo from "../components/images/logoBody.png";
import { Login, StyledLink } from "../components/util/board";
import Header from "../components/header";
import { H_1 } from "../components/h1";
import Container from "../components/container";
import checkSignUp from "../components/util/regexValidation";
import Shenkar from "../components/images/shenkar.png";

function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const attributeList = [];
  const dataUserRole = {
    Name: "custom:user_role",
    Value: "0",
  };
  const isFull = email && phone_number && username && Password;
  const onSubmit = (event) => {
    event.preventDefault();
    if (checkSignUp()) return;
    const dataEmail = {
      Name: "email",
      Value: email,
    };

    const dataPhoneNumber = {
      Name: "phone_number",
      Value: `+972${phone_number.substring(1)}`,
    };

    const dataName = {
      Name: "name",
      Value: `"${username}"`,
    };

    const attributeDataUserRole = new CognitoUserAttribute(dataUserRole);
    const attributeEmail = new CognitoUserAttribute(dataEmail);
    const attributeName = new CognitoUserAttribute(dataName);
    const attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);
    attributeList.push(attributeDataUserRole);
    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);
    attributeList.push(attributeName);

    PoolData.signUp(username, Password, attributeList, null, (err, result) => {
      if (err) {
        // eslint-disable-next-line no-alert
        alert(err.message || JSON.stringify(err));
        return;
      }
      const cognitoUser = result.user;
      console.log(`user name is ${cognitoUser.getUsername()}`);
      navigate("/");
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

        <section>
          <H_1>SIGN UP</H_1>
          <TextField
            autoComplete="on"
            type="USERNAME"
            placeholder="USERNAME"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
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
            type="email"
            placeholder="EMAIL"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            autoComplete="on"
            type="number"
            placeholder="PHONE"
            value={phone_number}
            onChange={(event) => setPhone(event.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            autoComplete="on"
            type={showPassword ? "text" : "password"}
            placeholder="PASSWORD"
            value={Password}
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
          <Button disabled={!isFull} type="submit">
            SIGNUP
          </Button>
          <StyledLink to="/">Already have an account? &nbsp;</StyledLink>
        </section>
      </Login>
    </Container>
  );
}
export default SignupPage;
