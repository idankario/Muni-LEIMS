/* eslint-disable no-unused-vars */
import { Button, TextField, Alert } from "@mui/material";
import React, { useState } from "react";

import styled from "@emotion/styled";
import CircularProgress from "@mui/material/CircularProgress";
// import * as Api from "../Api";
import { Header } from "../components/util/board";
import UploadImage from "../components/util/uploadImage";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  max-width: 35vw;
  height: 90%;
  padding: 0 25px;
  position: relative;
`

const Title = styled.h1`
  text-align: center;
  font-size: 3em;
  margin-top: 20px;
`




export default function ImageUpload() {
  const [area, setArea] = useState({
    city: "",
    area: "",
    consumption: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleFileInput(file) {
    const res = await UploadImage(file);
  }
  return (
    <>
      <Header>
        <a href="/#">
          <span>Muni-LEIMS</span>
        </a>
      </Header>
      <PageMain>
        {
          !data.loading &&
          <Container>
            <Title>Upload Image</Title>
            <TextField autoComplete='off' value={area.city} id="standard-basic" label="City" variant="standard"
              onChange={(e) => setArea(prev => ({ ...area, city: e.target.value }))}
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
        )}
      </main>
    </>
  )
}