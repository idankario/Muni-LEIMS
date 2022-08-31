/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import { getImagesName } from "../Api";
import Header from "../components/header";
import BackButton from "../components/backButton";
import Tableimages from "../components/Tableimages";
import { H1, H6 } from "../components/h1";
import Container from "../components/container";

function ImagesName() {
  const [rows, setRows] = useState(null);
  useEffect(() => {
    async function getDataDB() {
      const data = await getImagesName();
      setRows(data);
    }
    getDataDB();
  }, []);

  return (
    <Container>
      <Header />
      <div>
        <H1>IMAGE LIST</H1>
        <H6>CHOOSE IMAGE FILE TO DISTANCE</H6>
        {rows ? (
          <Tableimages rows={rows} />
        ) : (
          <CircularProgress style={{ marginTop: "20vh", color: "yellow" }} />
        )}
        <BackButton />
      </div>
    </Container>
  );
}

export default ImagesName;
