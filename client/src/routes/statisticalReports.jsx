// import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import BackButton from "../components/backButton";
import Header from "../components/header";
import {
  getHighestSwitchboard,
  getLowestSwitchboard,
  getTopFiveSwitchboards,
  getLastFiveSwitchboards,
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
    fontSize: `5em`,
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
        <p>kWh per switchboard</p>
      </DataInnerData>
    </DataInner>
  );
}

function StatisticalReports() {
  const [data, setData] = useState({
    loading: true,
    highestSwitchboard: {},
    lowestSwitchboard: {},
    topFive: [],
    lastFive: [],
  });

  useEffect(() => {
    async function getDataDB() {
      const highestSwitchboard = await getHighestSwitchboard();
      const lowestSwitchboard = await getLowestSwitchboard();
      const topFive = await getTopFiveSwitchboards();
      const lastFive = await getLastFiveSwitchboards();
      setData({
        highestSwitchboard: highestSwitchboard[0],
        lowestSwitchboard: lowestSwitchboard[0],
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
      <Title>STATISTICAL REPORT</Title>
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
                    x: [null, ...data.topFive.map((o) => `num:${o.area}`)],
                    y: [
                      `0 kWh `,
                      ...data.topFive.map((o) => `${o.intensity} kWh `),
                    ],

                    type: "bar",
                    mode: "lines+markers",
                    marker: { color: "green" },
                  },
                ]}
                layout={{
                  width: 350,
                  height: 300,
                  xaxis: {
                    tickangle: -50,
                  },

                  title: "Top 5 Switchboards ",
                  font: { color: "white" },
                  plot_bgcolor: "black",
                  paper_bgcolor: "black",
                }}
                config={{ displayModeBar: false }}
              />

              <Plot
                data={[
                  {
                    x: [null, ...data.lastFive.map((o) => `num:${o.area}`)],
                    y: [
                      `0 kWh `,
                      ...data.lastFive
                        .slice(0)
                        .reverse()
                        .map((o) => `${o.intensity} kWh `),
                    ],
                    type: "bar",
                    mode: "lines+markers",
                    marker: { color: "red" },
                  },
                ]}
                layout={{
                  width: 350,
                  height: 300,
                  xaxis: {
                    tickangle: -45,
                  },

                  title: "Last 5 Switchboards ",
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
                title="The lowest energy intensity per switchboard"
                kWh={data.lowestSwitchboard.intensity}
                color="green"
              />
              <ConsumptionData
                title="The highest energy intensity per switchboard"
                kWh={data.highestSwitchboard.intensity}
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

export default StatisticalReports;
