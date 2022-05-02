import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";
import { loadCities, loadMunicipalities } from "../Api";
import Header from "../components/header";
import BackgroundImage from "../components/images/login.svg";
import BackButton from "../components/backButton";
import Table from "../components/Table";

const yellow = "#CDFA00";
const MainStyle = styled("div")(() => ({
  background: ` linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),url(${BackgroundImage}) no-repeat`,
  backgroundSize: `cover`,
  height: `calc(100vh - 60px)`,
  width: `100vw`,
  display: `flex`,
  alignItems: `center`,
  flexDirection: `column`,
}));
const MainTitle = styled("h1")(() => ({
  color: `${yellow}`,
  marginTop: `20px`,
}));

async function loadData(dataType) {
  let data =
    dataType === "cities" ? await loadCities() : await loadMunicipalities();
  console.log(data);
  await data.forEach((_value, idx) => {
    data[idx].count = String(idx + 1).padStart(2, "0"); // 1 => 01, 2 => 02
    if (!Number.isInteger(data[idx].consumption_average))
      // Remove long float points
      data[idx].consumption_average = parseFloat(
        data[idx].consumption_average
      ).toFixed(3);
  });
  // data.push({count: '04', city: 'haifa', consumption_average: 322})
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

function reports({ dataType }) {
  const [rows, setRows] = useState(null);
  let data;
  useEffect(() => {
    async function getDataDB() {
      data = await loadData(dataType);
      setRows(data);
    }
    getDataDB();
  }, []);

  return (
    <>
      <Header />
      <MainStyle>
        <MainTitle>
          LAST {dataType === "cities" ? "CITIES" : "MUNICIPALITY"}
        </MainTitle>
        {rows ? (
          <Table
            rows={rows}
            dataName={dataType === "cities" ? "CITIES" : "MUNICIPALITY"}
          />
        ) : (
          <CircularProgress style={{ marginTop: "20vh", color: "yellow" }} />
        )}
        <BackButton />
      </MainStyle>
    </>
  );
}

export default reports;
