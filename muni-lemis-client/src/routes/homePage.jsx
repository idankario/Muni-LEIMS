import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "../components/util/board";
import Header from "../components/header";
import Button from "../components/button";
import { TypeOffice } from "../Api";
import { MenuMunicipalityConfig, MenuMinistryConfig } from "./menuConfig";
import { H2 } from "../components/h2";
import Container from "../components/container";
// import Profile from "../components/util/profile";

function HomePage() {
  const navigate = useNavigate();
  const [menuConfig, setisMenuConfig] = useState([{}]);
  useEffect(() => {
    async function getDataDB() {
      const typeOffice = await TypeOffice();
      console.log(typeOffice);
      console.log(typeOffice);
      if (typeOffice) setisMenuConfig(MenuMinistryConfig);
      else setisMenuConfig(MenuMunicipalityConfig);
    }

    getDataDB();
  }, []);

  return (
    <Container bgimage={1}>
      <Header />
      {/* <Profile /> */}
      <Menu>
        <section>
          {menuConfig.map((navigation) => (
            <Button
              onClick={() => navigate(navigation.path)}
              key={`${navigation.path}`}
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
