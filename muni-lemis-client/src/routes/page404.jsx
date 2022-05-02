<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import image404 from "../components/images/404.svg";
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/util/board';
import image404 from 'components/images/404.svg';
>>>>>>> d575c30f48cb674b8f3f5faa4782b648122fa246

export default function Page404() {
  return (
    <>
      <img src={image404} alt="404" title="404" />
      <h4 style={{ color: '#fff' }}>
        Oopps! The page you were looking doesnot exist.
      </h4>
      <Button component={Link} to="../">
        Go to home page
      </Button>
    </>
  );
}
