import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "../components/util/board";
import Header from "../components/header";
import Button from "../components/button";
import MenuConfig from "./menuConfig";
import { H2 } from "../components/h2";
import Container from "../components/container";

function HomePage() {
  const navigate = useNavigate();
  return (
    <Container bgImage={1}>
      <Header />
      <Menu>
        <section>
          {MenuConfig.map((navigation) => (
            <Button
              onClick={() => navigate(navigation.path)}
              key={navigation.title}
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
