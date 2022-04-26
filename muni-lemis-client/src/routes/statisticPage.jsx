import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import BackButton from 'components/BackButton';
import { Header, Login } from 'components/util/board';
import BackgroundImage from 'components/images/login.svg'
import Plot from 'react-plotly.js';
import { getHighestCentral, getLowestCentral, getTopCentral } from 'Api'
import { CircularProgress } from '@mui/material';


const PageMain = styled.main`
  background: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${BackgroundImage}) no-repeat;
  height: calc(100vh - 60px);
  width: 100vw;
`

const Title = styled.h1`
  color: #CDFA00;
  text-align: center;
  padding-top: 17px;
`
const CenterContainer = styled.div`
  display: flex;
  width: 80vw;
  height: calc(100vh - 150px);
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`


const Sep = styled.div`
  height: 100%;
  width: 2px;
  position: absolute;
  left: 50%;
  top: 0;
  background: #cdfa00;

`

const PlotWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: grid;
  place-items: center;
`



const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  position: relative;
  margin-left: auto;
`


const DataInner = styled.div`
  height: 50%;
  display: flex;
  flex-direction: row;
  ${props =>
    `color: ${props.color};`
  }
  align-items: center;
  justify-content: center;
  font-weight: bold;
  word-wrap: break-word;
  gap: 5%;
  > p {
    text-align: center;
    width: 40%;
    font-size: 1.3em;
    text-shadow: 2px 2px black;
  }
`

const DataInnerSep = styled.div`
  height: 60%;
  width: 5px;
  ${props =>
    `background: ${props.background};`
  }
`

const DataInnerData = styled.div`

  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  > span {
    font-size: 4em;
  }
  > p {
    font-size: 0.9em;
    color: white;
  }
  
`




function ConsumptionData({ title, kwh, color }) {
  return (
    <>
      <DataInner color={color}>
        <p>{title}</p>
        <DataInnerSep background={color} />
        <DataInnerData>
          <span>{kwh}</span>
          <p>KWH per resident</p>
        </DataInnerData>
      </DataInner>
    </>
  )
}




export default function StatisticPage() {

  const [data, setData] = useState({ loading: true, highest: {}, lowest: {}, top: [] })

  useEffect(async () => {
    const highest = await getHighestCentral()
    const lowest = await getLowestCentral()
    const top = await getTopCentral()
    console.log(data.top.map(o => o.intensity))

    setData({ highest: highest[0], lowest: lowest[0], top: top, loading: false })
  }, [])


  return (
    <>
      <Header>
        <a href="/#"><span>Muni-LEIMS</span></a>
      </Header>
      <PageMain>
        <Title>STATISTICAL REPORT:</Title>
        <CenterContainer>
          {data.loading
            ? <CircularProgress style={{ color: 'yellow', position: 'absolute', left: '50%', top: '35%' }} />
            : <>
              <PlotWrapper>
                <Plot
                  data={[
                    {
                      x: data.top.map(o => o.area),
                      y: data.top.map(o => o.intensity),
                      type: 'bar',
                      mode: 'lines+markers',
                      marker: { color: 'green' },
                      xaxis: {
                        tickangle: -45
                      }
                    },
                  ]}
                  layout={{
                    width: 350, height: 300, xaxis: {
                      tickangle: -45
                    },
                    font: { color: 'white' },
                    plot_bgcolor: 'black',
                    paper_bgcolor: "black",
                  }}
                  config={{ displayModeBar: false }}
                />
              </PlotWrapper>
              <Sep />
              <DataWrapper>
                <ConsumptionData title="The lowest central power consumption per resident" kwh={data.lowest.intensity} color="green" />
                <ConsumptionData title="The highest central power consumption per resident" kwh={data.highest.intensity} color="red" />
              </DataWrapper>
            </>
          }
        </CenterContainer>
        <BackButton path='/homePage' />
      </PageMain>
    </>
  )
}

