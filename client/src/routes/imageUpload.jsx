import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import Slider from "@mui/material/Slider";
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { MenuProps, Main } from "../components/form";
import BackButton from "../components/backButton";
import Header from "../components/header";
import UploadImage from "../components/util/uploadImage";
import { H1 } from "../components/h1";
import Container from "../components/container";
import Info from "../components/info";
import { getAllSwLocation } from "../Api";

function ImageUpload() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    userId: localStorage.getItem("user"),
    x: 165900,
    y: 635900,
    scale: 250,
    consumption: "1000",
    switchboards: [],
  });
  const [isUpolad, setIsUpolad] = useState(1);
  const [names, setNames] = useState([]);
  const isFull =
    data.x && data.y && data.consumption && data.switchboards.length;
  useEffect(() => {
    async function getDataDB() {
      setNames(await getAllSwLocation());
    }
    getDataDB();
  }, []);
  async function handleFileInput(file) {
    if (file) {
      setIsUpolad(0);
      const res = await UploadImage(file, file.name, data);
      setIsUpolad(1);
      if (res)
        // eslint-disable-next-line no-alert
        alert("Succes Upload Image");
      // eslint-disable-next-line no-alert
      else alert("Error Coud Not Upload Image");
      navigate("/homePage");
    }
  }

  return (
    <Container>
      <Header />
      {isUpolad ? (
        <>
          <Main>
            <section>
              <H1>Upload Image </H1>
              <Info />
              <Typography>Enter the cordinate of the image</Typography>
              <TextField
                type="number"
                autoComplete="off"
                value={data.x}
                id="standard-basic"
                label="x"
                variant="standard"
                onChange={(e) =>
                  setData(() => ({ ...data, x: e.target.value }))
                }
              />
              <TextField
                type="number"
                autoComplete="off"
                value={data.y}
                id="standard-basic"
                label="y"
                variant="standard"
                onChange={(e) =>
                  setData(() => ({ ...data, y: e.target.value }))
                }
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

              {/* <Typography>Enter the scale of the image</Typography>
          <Slider
            value={data.scale}
            onChange={(e) =>
              setData(() => ({ ...data, scale: e.target.value }))
            }
            min={100}
            max={250}
            step={25}
            valueLabelDisplay="on"
          /> */}
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
                    <Checkbox
                      checked={data.switchboards.indexOf(name.name) > -1}
                    />
                    <ListItemText primary={name.name} />
                  </MenuItem>
                ))}
              </Select>
              <Typography>Arial images are available in Govmap etc.</Typography>
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
        </>
      ) : (
        <CircularProgress style={{ marginTop: "20vh", color: "yellow" }} />
      )}
    </Container>
  );
}
export default ImageUpload;
