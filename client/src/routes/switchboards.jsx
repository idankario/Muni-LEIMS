import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Main } from "../components/form";
import BackButton from "../components/backButton";
import Header from "../components/header";
import { H1 } from "../components/h1";
import Container from "../components/container";
import { getSwLocation, insertSwitchboards, updateSwitchboards } from "../Api";

function Switchboards() {
  const navigate = useNavigate();
  const OfficeName = JSON.parse(localStorage.getItem("office"));
  const [data, setData] = useState({
    isUpdate: 1,
    userId: localStorage.getItem("user"),
    lat: OfficeName.lat,
    lng: OfficeName.lng,
    switchboard: "",
  });
  const [names, setNames] = useState([]);
  const isFull = data.lat && data.lng && data.switchboard;
  useEffect(() => {
    async function getDataDB() {
      setNames(await getSwLocation());
    }
    getDataDB();
  }, []);
  async function handleFileInput() {
    // eslint-disable-next-line no-unused-expressions
    data.isUpdate ? updateSwitchboards(data) : insertSwitchboards(data);
    navigate("/homePage");
  }

  return (
    <Container>
      <Header />
      <Main>
        <section>
          <H1>Switchboard {data.isUpdate ? "Update" : "Insert"}</H1>
          <FormControlLabel
            control={
              <Switch
                defaultChecked
                onChange={() =>
                  setData(() => ({ ...data, isUpdate: !data.isUpdate }))
                }
              />
            }
            label={data.isUpdate ? "Insert" : "Update"}
          />
          {data.isUpdate ? (
            <>
              <Typography>Select switchboard to update</Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                type="text"
                autoComplete="on"
                value={data.switchboard}
                label="switchboard"
                onChange={(e) =>
                  setData(() => ({ ...data, switchboard: e.target.value }))
                }
              >
                {names.map((name) => (
                  <MenuItem key={name.name} value={name.name}>
                    {name.name}
                  </MenuItem>
                ))}
              </Select>
            </>
          ) : (
            <>
              <Typography>Enter name of switchboard</Typography>
              <TextField
                type="text"
                autoComplete="on"
                value={data.switchboard}
                label="name switchboard"
                variant="standard"
                onChange={(e) =>
                  setData(() => ({ ...data, switchboard: e.target.value }))
                }
              />
            </>
          )}

          <Typography>Enter the cordinate of the switchboard</Typography>
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

          <Button
            disabled={!isFull}
            variant="contained"
            component="label"
            style={{ textAlign: "center" }}
            onClick={() => handleFileInput()}
          >
            update Switchboard
          </Button>
        </section>
      </Main>
      <BackButton />
    </Container>
  );
}
export default Switchboards;
