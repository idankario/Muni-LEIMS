/* eslint-disable no-unused-vars */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import BackButton from "../components/backButton";
import Header from "../components/header";
import UploadImage from "../components/util/uploadImage";
import { H3 } from "../components/h2";
import Container from "../components/container";
import Info from "../components/info";

const Menu = styled("main")({
  "& section": {
    margin: "auto",
    opacity: "0.9",
    borderRadius: "50px",
    background: "#fff",
    maxWidth: "30em",
    padding: "2px 0px 5px 40px",
  },
  "& .MuiFormControl-root": {
    width: "14em",
    textAlign: "center",
  },
  "& p:not(h3+p)": {
    textAlign: "left",
  },

  "& .MuiInputBase-root": {
    width: "75%",
  },

  "& section >*": {
    textAlign: "center",
    maxWidth: "80%",
    margin: "0.8em 0px",
  },
  "& .MuiButton-root": {
    width: "16em",
    height: "4em",
    margin: "30px 100px",
    color: "#000",
    textAlign: "center",
    verticalAlign: "center",
    ":hover": {
      backgroundColor: "#ECB22F",
    },
  },
});

function ImageUpload() {
  const [data, setData] = useState({
    municipality: "",
    lat: "",
    lng: "",
    scale: 1100,
    consumption: "",
    switchboards: [],
  });
  const names = [];
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  };

  const [loading, setLoading] = useState(false);

  async function handleFileInput(file) {
    const res = await UploadImage(file);
  }

  return (
    <Container>
      <Header />
      <Menu>
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
            onChange={(e) => setData(() => ({ ...data, data: e.target.value }))}
          />
          <TextField
            type="number"
            autoComplete="off"
            value={data.lng}
            id="standard-basic"
            label="lng"
            variant="standard"
            onChange={(e) => setData(() => ({ ...data, data: e.target.value }))}
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
              <MenuItem key={name} value={name}>
                <Checkbox checked={data.switchboards.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
          <Typography>Arial Images are Available in Govmap etc.</Typography>
          <Button
            disabled={!!Object.values(data).some((i) => i === null)}
            variant="contained"
            component="label"
            style={{ textAlign: "center" }}
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
      </Menu>
      <BackButton />
    </Container>
  );
}
export default ImageUpload;
