import React, { useState } from 'react';
import Logo from '../component/images/logo.svg';
import { Header,  Login } from '../component/util/board';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { TextField,Button } from '@mui/material';
const LoginPage = () => {

    return (
        <>

            <Header>
                <a href='#'><span>Muni-LEIMS</span></a>
         
            </Header>
            <Login>
                <img src={Logo} alt="logo" title='logo' />
                <h2>Muni-LEIMS</h2>
  <section>
  <AccountCircleIcon
 

/>
                <h2>USER LOGIN:</h2>
                <TextField  type="USERNAME" placeholder="USERNAME" />
                <TextField  type="PASSWORD" placeholder="PASSWORD" />
                <Button>LOGIN</Button>
                </section>
            </Login>
        </>
    );
};
export default LoginPage;
