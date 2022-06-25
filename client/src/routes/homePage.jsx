import React from "react";
import { Menu } from "../components/util/board";
import Header from "../components/header";
import MenuHome from "./menuHome";
import Container from "../components/container";
import { H1 } from "../components/h1";

function HomePage() {
  return (
    <Container bgimage={1}>
      <Header />
      <H1>Menu </H1>
      <Menu>
        <MenuHome />
      </Menu>
    </Container>
  );
}

export default HomePage;
