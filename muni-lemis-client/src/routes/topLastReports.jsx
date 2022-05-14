import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { loadCities, loadMunicipalities } from "../Api";
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

async function loadData(dataType) {
  let data =
    dataType === "municipalities"
      ? await loadCities()
      : await loadMunicipalities();
  await data.forEach((_value, idx) => {
    data[idx].count = String(idx + 1).padStart(2, "0"); // 1 => 01, 2 => 02
    if (!Number.isInteger(data[idx].consumption_average))
      // Remove long float points
      data[idx].consumption_average = parseFloat(
        data[idx].consumption_average
      ).toFixed(0);
  });
  data =
    data.length < 6 // Fill table with empty rows if less than 6 rows, for better UI
      ? Array.from(
          { length: 6 },
          (_, i) =>
            data[i] ?? {
              count: "\u00A0",
              city: "\u00A0",
              consumption_average: "\u00A0",
            }
        )
      : data;

  return data;
}

function TopLastReports({ dataType }) {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    async function getDataDB() {
      const data =
        dataType === "municipalities"
          ? await loadCities()
          : await loadMunicipalities();
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
        <Table
          rows={rows}
          dataName={
            dataType === "municipalities" ? "Municipalities" : "Switchboards"
          }
        />
        <BackButton />
      </MainStyle>
    </Container>
  );
}

export default TopLastReports;
