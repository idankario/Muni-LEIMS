// import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import BackButton from "../components/backButton";
import Header from "../components/header";
import { getHighestCentral, getLowestCentral, getTopCentral } from "../Api";
import Body from "../components/body";

const Title = styled("h1")(() => ({
  color: `#cdfa00`,
  textAlign: `center`,
  paddingTop: `17px`,
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

function ConsumptionData({ title, kwh, color }) {
  return (
    <DataInner color={color}>
      <p>{title}</p>
      <DataInnerSep background={color} />
      <DataInnerData>
        <span>{kwh}</span>
        <p>KWH per resident</p>
      </DataInnerData>
    </DataInner>
  );
}

function StatisticalReports() {
  const [data, setData] = useState({
    loading: true,
    highest: {},
    lowest: {},
    top: [],
  });

  useEffect(() => {
    async function getDataDB() {
      const highest = await getHighestCentral();
      const lowest = await getLowestCentral();
      const top = await getTopCentral();
      setData({
        highest: highest[0],
        lowest: lowest[0],
        top,
        loading: false,
      });
    }
    getDataDB();
  }, []);

  return (
    <Body>
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
                    x: data.top.map((o) => o.area),
                    y: data.top.map((o) => o.intensity),
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
                  font: { color: "white" },
                  plot_bgcolor: "black",
                  paper_bgcolor: "black",
                }}
                config={{ displayModeBar: false }}
              />
            </PlotWrapper>
            <PlotWrapper>
              <Plot
                data={[
                  {
                    x: data.top.map((o) => o.area),
                    y: data.top.map((o) => o.intensity),
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
                title="The lowest central power consumption per resident"
                kwh={data.lowest.intensity}
                color="green"
              />
              <ConsumptionData
                title="The highest central power consumption per resident"
                kwh={data.highest.intensity}
                color="red"
              />
            </DataWrapper>
          </>
        )}
      </CenterContainer>
      <BackButton />
    </Body>
  );
}

export default StatisticalReports;
