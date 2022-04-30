/* eslint-disable no-unused-vars */
import { Button, TextField, Alert } from "@mui/material";
import React, { useState } from "react";

import styled from "@emotion/styled";
import CircularProgress from "@mui/material/CircularProgress";
// import * as Api from "../Api";
import { Header } from "../components/util/board";
import UploadImage from "../components/util/uploadImage";

const Container = styled.div`
  background-image: "../components/images/login.svg";
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
  justify-content: center;
  flex-direction: column;
  background: white;
  /* padding: 15px 20px; */
  border-radius: 8px;
  max-width: 35vw;
  padding: 20px 20px;
`;

const ResContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
      </main>
    </>
  );
}
