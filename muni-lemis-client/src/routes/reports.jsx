import React, { useEffect, useState } from "react";
// import { styled } from '@mui/material/styles';
// import BgImage from '../components/images/login.svg';
import { CircularProgress } from "@mui/material";
import { loadCities, loadMunicipalities } from "../Api";
import { Header } from "../components/util/board";
import Table from "../components/Table";

async function loadData(dataType) {
  let data =
    dataType === "cities" ? await loadCities() : await loadMunicipalities();
  // console.log(data);
  await data.forEach((value, idx) => {
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

  useEffect(async () => {
    const data = await loadData(dataType);
    setRows(data);
  }, []);

  return (
    <>
      <Header>
        <a href="/#">
          <span>Muni-LEIMS</span>
        </a>
      </Header>
      <main>
        <h1>LAST {dataType === "cities" ? "CITIES" : "MUNICIPALITY"}</h1>
        {rows ? (
          <Table
            rows={rows}
            dataName={dataType === "cities" ? "CITIES" : "MUNICIPALITY"}
          />
        ) : (
          <CircularProgress style={{ marginTop: "20vh", color: "yellow" }} />
        )}
      </main>
    </>
  );
}

export default reports;
