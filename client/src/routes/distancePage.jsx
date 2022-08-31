import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useLocation, useNavigate } from "react-router-dom";
import getWindowDimensions from "../components/util/useWindowDimensions";
import Header from "../components/header";
import BackButton from "../components/backButton";
import Container from "../components/container";
import { H1, H6 } from "../components/h1";
import { disactiveStatisticalReport, activeStatisticalReport } from "../Api";

function DistancePage() {
  const canvas = useRef();
  const [canvasDimensions, setCanvasDimensions] = useState({
    height: 300,
    width: 300,
  });
  const { width } = getWindowDimensions();
  const [distance, setDistance] = useState(0);
  const [count, setCount] = useState(0);
  const [imageSize, setImageSize] = useState(width);
  const distancePixel = 74 / 1174;
  const [distancePerPixel, setDistancePerPixel] = useState(distancePixel);
  const navigate = useNavigate();
  let i = 1;
  let ctx = null;
  let clientx1;
  let clienty1;
  const [backgroundCanvas, setBackgroundCanvas] = useState("");
  const location = useLocation();
  useEffect(() => {
    async function setImageDimensions() {
      const file = `${location.state.name
        .split(".")
        .slice(0, -1)
        .join("")}.jpg`;
      const url = `https://api.muni-leims.ml/presignedurl?filename=${file}`;
      try {
        const res = await axios({
          method: "get",
          url,
          headers: { Authorization: localStorage.getItem("token") },
        });
        const img = new Image();
        img.src = await res.data.body;
        setBackgroundCanvas(img.src);
        img.onload = () => {
          setImageSize(img.width);
          setDistancePerPixel((distancePixel * img.width) / (width * 0.8));
          setCanvasDimensions({
            height: img.height,
            width: width * 0.8,
          });
        };
        img.onerror = () => {
          throw new Error("image not found");
        };
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }
    setImageDimensions();
  }, []);
  useEffect(() => {
    setCanvasDimensions({
      ...canvasDimensions,
      width: width * 0.8,
    });
    setDistancePerPixel((distancePixel * imageSize) / (width * 0.8));
  }, [width]);
  const getDistance = (clientx2, clienty2) => {
    const disX = Math.abs(clientx1 - clientx2);
    const disY = Math.abs(clienty1 - clienty2);
    const dT = Math.sqrt(disX * disX + disY * disY) * distancePerPixel;
    if (dT > 0.5) {
      setCount(count + 1);
      ctx.moveTo(clientx1, clienty1);
      ctx.lineTo(clientx2, clienty2);
      ctx.stroke();
      setDistance(distance + dT);
    }
  };

  const clear = () => {
    setCount(0);
    setDistance(0);
    ctx = canvas.current.getContext("2d");
    ctx.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);
  };
  const getCursorPosition = (e) => {
    ctx = canvas.current.getContext("2d");
    ctx.lineWidth = 5;
    if (i) {
      i = 0;
      clientx1 = e.pageX - canvas.current.offsetLeft;
      clienty1 = e.pageY - canvas.current.offsetTop;
      ctx.beginPath();
    } else {
      const clientx2 = e.pageX - canvas.current.offsetLeft;
      const clienty2 = e.pageY - canvas.current.offsetTop;
      getDistance(clientx2, clienty2, ctx);
      i = 1;
    }
  };

  return (
    <Container bgimage={1} width={canvasDimensions.width}>
      <Header />
      <div
        style={{
          textAlign: "center",
        }}
      >
        <H1>DISTANCE {count ? `${(distance / count).toFixed(2)}m` : ""}</H1>
        <H6>Select Pairs of Streetlight to Compute the Average Distances</H6>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => {
            disactiveStatisticalReport({ imageName: location.state.name });
            navigate("/homePage");
          }}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => clear()}
        >
          Clear
        </Button>
        <Button
          variant="contained"
          color="success"
          startIcon={<DoneAllIcon />}
          onClick={() => {
            activeStatisticalReport({
              imageName: location.state.name,
              distance: count ? `${(distance / count).toFixed(2)}m` : "",
            });
            navigate("/homePage");
          }}
        >
          Approve
        </Button>
        <canvas
          id="hi"
          ref={canvas}
          onClick={getCursorPosition}
          width={canvasDimensions.width}
          height={canvasDimensions.height}
          style={{
            backgroundImage: `url(${backgroundCanvas})`,
            backgroundSize: "100% 100%",
          }}
        />
      </div>
      <BackButton />
    </Container>
  );
}

export default DistancePage;
