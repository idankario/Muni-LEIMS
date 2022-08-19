/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Menu } from "../components/util/board";
import Header from "../components/header";
import BackButton from "../components/backButton";
import Container from "../components/container";
import { H1 } from "../components/h1";

function DistancePage() {
  const canvas = useRef();
  const [canvasDimensions, setCanvasDimensions] = useState({
    height: 300,
    width: 300,
  });
  // const history = useNavigate();
  // const data22 = history.location.state.fileName;
  const { dd } = useLocation();

  const [distance, setDistance] = useState(0);
  const [count, setCount] = useState(0);
  const distancePerPixel = 74 / 1174;
  let i = 1;
  let clientx1;
  let clienty1;
  const [backgroundCanvas, setBackgroundCanvas] = useState("");
  const location = useLocation();
  useEffect(() => {
    async function setImageDimensions() {
      const url = `https://api.muni-leims.ml/presignedurl?filename=${await location.state.name}`;
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
          setCanvasDimensions({
            height: img.height,
            width: img.width,
          });
        };
        img.onerror = () => {
          // eslint-disable-next-line no-console
          // console.error(err);
        };
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }
    setImageDimensions();
  }, []);
  const getDistance = (clientx2, clienty2) => {
    const disX = Math.abs(clientx1 - clientx2);
    const disY = Math.abs(clienty1 - clienty2);

    setCount(count + 1);

    setDistance(
      distance + Math.sqrt(disX * disX + disY * disY) * distancePerPixel
    );
  };
  const getCursorPosition = (e) => {
    const ctx = canvas.current.getContext("2d");
    ctx.lineWidth = 5;
    if (i) {
      i = 0;
      clientx1 = e.pageX - canvas.current.offsetLeft;
      clienty1 = e.pageY - canvas.current.offsetTop;
      ctx.beginPath();
    } else {
      const clientx2 = e.pageX - canvas.current.offsetLeft;
      const clienty2 = e.pageY - canvas.current.offsetTop;
      getDistance(clientx2, clienty2);

      ctx.moveTo(clientx1, clienty1);
      ctx.lineTo(clientx2, clienty2);
      ctx.stroke();
      i = 1;
    }
  };

  return (
    <Container bgimage={1} width={canvasDimensions.width}>
      <Header />
      <Menu>
        <H1>DISTANCE {count ? `${(distance / count).toFixed(2)}m` : ""}</H1>
        <div>
          <canvas
            id="hi"
            ref={canvas}
            onClick={getCursorPosition}
            width={canvasDimensions.width}
            height={canvasDimensions.height}
            style={{
              backgroundImage: `url(${backgroundCanvas})`,
            }}
          />
        </div>
        <BackButton />
      </Menu>
    </Container>
  );
}

export default DistancePage;
