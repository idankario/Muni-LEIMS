import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import image404 from "../components/images/404.png";

export default function Page404() {
  return (
    <>
      <h4 style={{ color: "#000" }}>
        Oopps! The page you were looking doesnot exist.
      </h4>
      <img src={image404} alt="404" title="404" />
      <Button component={Link} to="../">
        Go to home page
      </Button>
    </>
  );
}
