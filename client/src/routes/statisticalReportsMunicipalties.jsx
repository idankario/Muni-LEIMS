// import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import BackButton from "../components/backButton";
import Header from "../components/header";
import {
  getHighestMunicipality,
  getLowestMunicipality,
  getTopFiveMunicipality,
  getLastFiveMunicipality,
} from "../Api";
import Container from "../components/container";
import { H2 } from "../components/h2";

const Title = styled(H2)(() => ({
  textAlign: `center`,
  margin: "15px",
}));

const CenterContainer = styled("div")(() => ({
  display: `flex`,
  width: `80vw`,
  minHeight: `calc(80vh - 150px)`,
  justifyContent: `space-around`,
  marginLeft: `auto`,
  marginRight: `auto`,
  position: `relative`,
}));

const Sep = styled("div")(() => ({
  height: `100%`,
  width: `2px`,
  position: `absolute`,
  left: `50%`,
  top: `0`,
  background: `#cdfa00`,
}));
const PlotWrapper = styled("div")(() => ({
  width: `50%`,
  height: `100%`,
  display: `grid`,
  placeItems: `center`,
}));
const DataWrapper = styled("div")(() => ({
  display: `flex`,
  flexDirection: `column`,
  width: `50%`,
  position: `relative`,
  marginLeft: `auto`,
}));
const DataInner = styled("div")((color) => ({
  height: `50%`,
  display: `flex`,
  flexDirection: `row`,
  color: `${color.color}`,
  alignItems: `center`,
  justifyContent: `center`,
  fontWeight: `bold`,
  wordWrap: `break-word`,
  gap: ` 5%`,
  "& > p": {
    textAlign: `center`,
    width: `40%`,
    fontSize: `1.3em`,
    textShadow: `2px 2px black`,
  },
}));

const DataInnerSep = styled("h2")((background) => ({
  height: `60%`,
  width: `5px`,
  background: `${background.background}`,
}));
const DataInnerData = styled("div")(() => ({
  display: `flex`,
  flexDirection: `column`,
  height: `100%`,
  justifyContent: `center`,
  alignItems: `center`,
  "& > span": {
    fontSize: `4em`,
  },
  "& > p": {
    fontSize: `0.9em`,
    color: `white`,
  },
}));

function ConsumptionData({ title, kWh, color }) {
  return (
    <DataInner color={color}>
      <p>{title}</p>
      <DataInnerSep background={color} />
      <DataInnerData>
        <span>{kWh}</span>
        <p>kWh per Municipality</p>
      </DataInnerData>
    </DataInner>
  );
}

function StatisticalReportsminstry() {
  const [data, setData] = useState({
    loading: true,
    highestMunicipality: {},
    lowestmunicipality: {},
    topFive: [],
    lastFive: [],
  });

  useEffect(() => {
    async function getDataDB() {
      const highestMunicipality = await getHighestMunicipality();
      const lowestmunicipality = await getLowestMunicipality();
      const topFive = await getTopFiveMunicipality();
      const lastFive = await getLastFiveMunicipality();
      setData({
        highestMunicipality: highestMunicipality[0],
        lowestmunicipality: lowestmunicipality[0],
        topFive,
        lastFive,
        loading: false,
      });
    }
    getDataDB();
  }, []);

  return (
    <Container>
      <Header />
      <Title>STATISTICAL REPORT:</Title>
      <CenterContainer>
        {data.loading ? (
          <CircularProgress
            style={{
              color: "yellow",
              position: "absolute",
              left: "50%",
              top: "35%",
            }}
          />
        ) : (
          <>
            <PlotWrapper>
              <Plot
                data={[
                  {
                    x: [null, ...data.topFive.map((o) => `${o.office_name}`)],
                    y: [
                      `0 kWh `,
                      ...data.topFive.map(
                        (o) => `${o.energy_inetensity_average} kWh `
                      ),
                    ],
                    type: "bar",
                    mode: "lines+markers",
                    marker: { color: "green" },
                    xaxis: {
                      tickangle: -45,
                    },
                  },
                ]}
                layout={{
                  width: 350,
                  height: 300,
                  xaxis: {
                    tickangle: -45,
                  },
                  title: "Top 5 Municipalities ",
                  font: { color: "white" },
                  plot_bgcolor: "black",
                  paper_bgcolor: "black",
                }}
                config={{ displayModeBar: false }}
              />

              <Plot
                data={[
                  {
                    x: [null, ...data.lastFive.map((o) => `${o.office_name}`)],
                    y: [
                      `0 kWh `,
                      ...data.lastFive
                        .slice(0)
                        .reverse()
                        .map((o) => `${o.energy_inetensity_average} kWh `),
                    ],
                    type: "bar",
                    mode: "lines+markers",
                    marker: { color: "red" },
                    xaxis: {
                      tickangle: -45,
                    },
                  },
                ]}
                layout={{
                  width: 350,
                  height: 300,
                  xaxis: {
                    tickangle: -45,
                  },
                  title: "Last 5 Municipalities ",
                  font: { color: "white" },
                  plot_bgcolor: "black",
                  paper_bgcolor: "black",
                }}
                config={{ displayModeBar: false }}
              />
            </PlotWrapper>
            <Sep />
            <DataWrapper>
              <ConsumptionData
                title="The lowest energy intensity per municipality"
                kWh={data.lowestmunicipality.energy_inetensity_average}
                color="green"
              />
              <ConsumptionData
                title="The highest energy intensity per municipality"
                kWh={data.highestMunicipality.energy_inetensity_average}
                color="red"
              />
            </DataWrapper>
          </>
        )}
      </CenterContainer>
      <BackButton />
    </Container>
  );
}

export default StatisticalReportsminstry;
