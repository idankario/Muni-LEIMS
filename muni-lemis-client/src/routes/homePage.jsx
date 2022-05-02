<<<<<<< HEAD
import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "../components/util/board";
import Header from "../components/header";
import Button from "../components/button";
import MenuConfig from "./menuConfig";
import { H2 } from "../components/h2";
=======
import React from 'react';
import sidebarConfig from './sidebarConfig';
import { Header, Button, Menu } from 'components/util/board';
import { useNavigate } from 'react-router-dom';
>>>>>>> d575c30f48cb674b8f3f5faa4782b648122fa246

function HomePage() {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <Menu>
        <h2>Menu:</h2>
        <section>
<<<<<<< HEAD
          {MenuConfig.map((navigation) => (
            <Button
              onClick={() => navigate(navigation.path)}
              key={navigation.title}
=======
          {sidebarConfig.map((navigation) => (
            <Button 
                onClick={() => navigate(navigation.path)} 
                key={navigation.title} 
                sx={{ width: '100%' }}
>>>>>>> d575c30f48cb674b8f3f5faa4782b648122fa246
            >
              <H2>{navigation.title} </H2>
            </Button>
          ))}
        </section>
      </Menu>
    </>
  );
}
export default HomePage;
