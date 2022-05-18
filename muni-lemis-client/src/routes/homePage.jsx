import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "../components/util/board";
import Header from "../components/header";
import Button from "../components/button";
import {typeOffice} from "../Api"
import { MenuMunicipalityConfig, MenuMinistryConfig } from "./menuConfig";
import { H2 } from "../components/h2";
import Container from "../components/container";

function HomePage() {
  const navigate = useNavigate();
  const [menuConfig, setisMenuConfig] = useState([{}]);
  useEffect(() => {
    async function getDataDB() {
    const office=await typeOffice(localStorage.getItem("user"));
  // data type Specifies the values to display. The municipality will present the municipalities and the Ministry of Energy the Ministry of Energy 
    if (office.length===0 )  setisMenuConfig(MenuMunicipalityConfig);  
    else setisMenuConfig(MenuMinistryConfig);
    }
    getDataDB();
  }, []);


  
 
  return (
    <Container bgImage={1}>
      <Header />
      <Menu>
        <section>
          {menuConfig.map((navigation) => (
            <Button
              onClick={() => navigate(navigation.path)}
              key={navigation.path}
            >
              <H2>{navigation.title} </H2>
            </Button>
          ))}
        </section>
      </Menu>
    </Container>
  );
}
export default HomePage;
