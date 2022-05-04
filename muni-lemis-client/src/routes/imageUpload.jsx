/* eslint-disable no-unused-vars */
import { Typography } from '@mui/material';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import BackgroundImage from "../components/images/login.svg";
import BackButton from "../components/backButton";
import Header from "../components/header";
import UploadImage from "../components/util/uploadImage";
import { H2 } from "../components/h2";
import InfoButton from "../components/infoButton";



// import * as Api from "../Api";
const Menu = styled("main")({
  paddingTop: "35px",
  background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${BackgroundImage}) no-repeat`,
  minHeight: `calc(100vh - 95px)`,
  width: "100%",
  "& section": {
    textAlign: "center",
    margin: "auto",
    height: "450px",
    opacity: "90%",
    borderRadius: "50px",
    background: "#fff",
    width: "400px",
    display: "flex",
    flexDirection: "column",
    padding: "5%",
  },
  "& section >*": {
    marginBottom: "60px",
  },
});

function ImageUpload() {
  const [area, setArea] = useState({
    municipality: "",
    area: "",
    consumption: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleFileInput(file) {
    const res = await UploadImage(file);
  }

  return (
    <>
      <Header />
      <Menu>
        <section>
          <H2>Upload Image</H2>
          <TextField
            autoComplete="off"
            value={area.municipality}
            id="standard-basic"
            label="Municipality"
            variant="standard"
            onChange={(e) =>
              setArea(() => ({ ...area, municipality: e.target.value }))
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
          <TextField
            autoComplete="off"
            value={area.area}
            id="standard-basic"
            label="Put cordinate of area"
            variant="standard"
            onChange={(e) =>
              setArea((prev) => ({ ...area, area: e.target.value }))
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
          
        </section>
      </Menu>
      <BackButton />
      <InfoButton/>


 
     
    </>
  );
}
export default ImageUpload;
