/* eslint-disable no-unused-vars */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { MenuProps, Main } from "../components/form";
import BackButton from "../components/backButton";
import Header from "../components/header";
import UploadImage from "../components/util/uploadImage";
import { H3 } from "../components/h2";
import Container from "../components/container";
import Info from "../components/info";
import { getSwLocation } from "../Api";

function ImageUpload() {
  const OfficeName = JSON.parse(localStorage.getItem("office"));
  const [data, setData] = useState({
    userId: localStorage.getItem("user"),
    lat: OfficeName.lat,
    lng: OfficeName.lng,
    scale: 100,
    consumption: "1000",
    switchboards: [],
  });
  const [names, setNames] = useState([]);
  const isFull =
    data.lat && data.lng && data.consumption && data.switchboards.length;
  useEffect(() => {
    async function getDataDB() {
      setNames(await getSwLocation());
    }
    getDataDB();
  }, []);
  // const [loading, setLoading] = useState(false);

  async function handleFileInput(file) {
    const res = await UploadImage(file, data);
  }

  return (
    <Container>
      <Header />
      <Main>
        <section>
          <H3>Upload Image</H3>
          <Info />
          <Typography>Enter the cordinate of the image</Typography>
          <TextField
            type="number"
            autoComplete="off"
            value={data.lat}
            id="standard-basic"
            label="lat"
            variant="standard"
            onChange={(e) => setData(() => ({ ...data, lat: e.target.value }))}
          />
          <TextField
            type="number"
            autoComplete="off"
            value={data.lng}
            id="standard-basic"
            label="lng"
            variant="standard"
            onChange={(e) => setData(() => ({ ...data, lng: e.target.value }))}
          />
          <Typography>
            Enter the total consamption switchboards of the image
          </Typography>
          <TextField
            type="number"
            autoComplete="off"
            value={data.consumption}
            label="Consumption"
            variant="standard"
            onChange={(e) =>
              setData(() => ({ ...data, consumption: e.target.value }))
            }
          />

          <Typography>Enter the scale of the image</Typography>
          <Slider
            value={data.scale}
            onChange={(e) =>
              setData(() => ({ ...data, scale: e.target.value }))
            }
            min={100}
            max={1000}
            step={25}
            valueLabelDisplay="on"
          />
          <Typography>Select switchboards of the image</Typography>
          <Select
            multiple
            value={data.switchboards}
            onChange={(e) =>
              setData(() => ({ ...data, switchboards: e.target.value }))
            }
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name.name} value={name.name}>
                <Checkbox checked={data.switchboards.indexOf(name.name) > -1} />
                <ListItemText primary={name.name} />
              </MenuItem>
            ))}
          </Select>
          <Typography>Arial Images are Available in Govmap etc.</Typography>
          <Button
            disabled={!isFull}
            variant="contained"
            component="label"
            style={{ textAlign: "center" }}
            onClick={() => handleFileInput()}
          >
            Upload Image
            {/* Upload image file from file system */}
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => handleFileInput(e.target.files[0])}
            />
          </Button>
        </section>
      </Main>
      <BackButton />
    </Container>
  );
}
export default ImageUpload;
