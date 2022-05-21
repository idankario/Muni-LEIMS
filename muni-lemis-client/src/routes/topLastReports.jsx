/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";
import { getSwitchboards, loadMunicipalities } from "../Api";
import Header from "../components/header";
import BackButton from "../components/backButton";
import Table from "../components/Table";
import { H2 } from "../components/h2";
import Container from "../components/container";

const MainStyle = styled("div")(() => ({
  display: `flex`,
  alignItems: `center`,
  flexDirection: `column`,
}));

function TopLastReports({ dataType }) {
  const [rows, setRows] = useState(null);
  useEffect(() => {
    async function getDataDB() {
      const data =
        dataType === "municipalities"
          ? await loadMunicipalities()
          : await getSwitchboards();
      setRows(data);
    }
    getDataDB();
  }, []);

  return (
    <Container>
      <Header />
      <MainStyle>
        <H2>
          {dataType === "municipalities"
            ? "Top/Last Municipalities"
            : "Top/Last Switchboards"}
        </H2>
        {rows ? (
          <Table
            rows={rows}
            dataName={
              dataType === "municipalities" ? "Municipalities" : "Switchboards"
            }
          />
        ) : (
          <CircularProgress style={{ marginTop: "20vh", color: "yellow" }} />
        )}
        <BackButton />
      </MainStyle>
    </Container>
  );
}

export default TopLastReports;
