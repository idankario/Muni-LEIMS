import React from "react";
import { Menu } from "../components/util/board";
import Header from "../components/header";
import MenuHome from "./menuHome";
import Container from "../components/container";

function HomePage() {
  return (
    <Container bgimage={1}>
      <Header />
      <Menu>
        <MenuHome />
      </Menu>
    </Container>
  );
}

export default HomePage;
