<<<<<<< HEAD
import { Button, Input, TextField, Snackbar, Alert } from '@mui/material';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import CircularProgress from '@mui/material/CircularProgress';
import * as Api from 'Api'
import { Header } from 'components/util/board'
import BackButton from 'components/BackButton';
import BackgroundImage from 'components/images/login.svg'
import { css } from '@emotion/react';

const PageMain = styled.main`
  background: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${BackgroundImage}) no-repeat;
  height: calc(100vh - 60px);
  width: 100vw;
  display: grid;
  place-items: center;
`

const Container = styled.div`
=======
import { Button, TextField, Alert } from "@mui/material";
import React, { useState } from "react";

import styled from "@emotion/styled";
import CircularProgress from "@mui/material/CircularProgress";
import * as Api from "../Api";
import { Header } from "../components/util/board";

const Container = styled.div`
  background-image: "../components/images/login.svg";
>>>>>>> origin/master
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  max-width: 35vw;
<<<<<<< HEAD
  height: 90%;
  padding: 0 25px;
  position: relative;
`
=======
  padding: 20px 20px;
`;
>>>>>>> origin/master

const Title = styled.h1`
  text-align: center;
  font-size: 3em;
  margin-top: 20px;
<<<<<<< HEAD
`




export default function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState('')

  const [area, setArea] = useState({ city: '', area: '', consumption: '' })
  const [data, setData] = useState({
    res: { error: false, text: '' },
    loading: false,
  })

  async function upload(file) {
    setData({ ...data, loading: true })
    const res = await Api.uploadImage(file, area.city, area.area, area.consumption)
    setArea({ city: '', area: '', consumption: '' })
    setData({ ...data, loading: false })

    if (res.ok) setData({ ...data, res: { error: false, text: `Image uploaded and will be scanned...` } })
    else setData({ ...data, res: { error: true, text: `Server error` } })
  }

  async function fileHandler(file) {
    Object.keys(area).forEach(i =>
      area[i] = area[i].toLowerCase()
    )
    upload(file)
  }

=======
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function ImageUpload() {
  const [area, setArea] = useState({
    city: null,
    area: null,
    consumption: null,
  });
  // const [selectedFile, setSelectedFile] = useState("");
  const [apiRes, setApiRes] = useState({ error: false, text: "" });
  const [loading, setLoading] = useState(false);

  async function handleFileInput(file) {
    setLoading(true);
    Object.keys(area).forEach((i) => {
      area[i] = area[i].toLowerCase();
    });
    const res = await Api.uploadImage(
      file,
      area.city,
      area.area,
      area.consumption
    );
    setLoading(false);
    setArea({ city: null, area: null, consumption: null });
    if (res.ok)
      setApiRes({
        error: false,
        text: `Image uploaded and will be scanned...`,
      });
    else setApiRes({ error: true, text: `Server error` });
  }

>>>>>>> origin/master
  return (
    <>
      <Header>
        <a href="/#">
          <span>Muni-LEIMS</span>
        </a>
      </Header>
<<<<<<< HEAD
      <PageMain>
        {
          !data.loading &&
          <Container>
            <Title>Upload Image</Title>
            <TextField autoComplete='off' value={area.city} id="standard-basic" label="City" variant="standard"
              onChange={(e) => setArea(prev => ({ ...area, city: e.target.value }))}
            />
            <TextField autoComplete='off' value={area.area} id="standard-basic" label="Area" variant="standard"
              onChange={(e) => setArea(prev => ({ ...area, area: e.target.value }))}
            />
            <TextField autoComplete='off' value={area.consumption} id="standard-basic" label="Consumption" variant="standard"
              onChange={(e) => setArea(prev => ({ ...area, consumption: e.target.value }))}
            />

            <Button
              disabled={Object.values(area).some(i => i === null) ? true : false}
              variant="contained"
              component="label"
              style={{ textAlign: 'center', marginTop: '7px' }}
            >
              Upload Image
              <input type="file" accept='image/*' hidden
                onChange={(e) => fileHandler(e.target.files[0])}
              />
            </Button>
            {
              data.res.text
              &&
              <Alert
                style={{ bottom: '25px', position: 'absolute' }}
                onClose={() => setData({ ...data, res: { error: false, text: '' } })}
                severity={data.res.error ? "error" : 'success'}
              >
                {data.res.text}
              </Alert>
            }
          </Container>
        }
        {
          data.loading && <CircularProgress style={{color: 'yellow'}}/> 
        }
        <BackButton path='/homePage' />
      </PageMain>
=======
      <main>
        {!loading && (
          <Container>
            <h1
              style={{
                textAlign: "center",
                fontSize: "3em",
                marginTop: "20px",
              }}
            >
              Upload Image
            </h1>
            <TextField
              autoComplete="off"
              value={area.city}
              id="standard-basic"
              label="City"
              variant="standard"
              onChange={(e) =>
                setArea(() => ({ ...area, city: e.target.value }))
              }
            />
            <TextField
              autoComplete="off"
              value={area.area}
              id="standard-basic"
              label="Area"
              variant="standard"
              onChange={(e) =>
                setArea(() => ({ ...area, area: e.target.value }))
              }
            />
            <TextField
              autoComplete="off"
              value={area.consumption}
              id="standard-basic"
              label="Consumption"
              variant="standard"
              onChange={(e) =>
                setArea(() => ({ ...area, consumption: e.target.value }))
              }
            />

            <Button
              disabled={!!Object.values(area).some((i) => i === null)}
              variant="contained"
              component="label"
              style={{ textAlign: "center" }}
            >
              Upload Image
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => handleFileInput(e.target.files[0])}
              />
            </Button>
          </Container>
        )}
        {apiRes.text && !loading && (
          <ResContainer>
            <Alert severity={apiRes.error ? "error" : "success"}>
              {apiRes.text}
            </Alert>
          </ResContainer>
        )}

        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
            }}
          >
            <CircularProgress style={{ color: "yellow" }} />
          </div>
        )}
      </main>
>>>>>>> origin/master
    </>
  )
}