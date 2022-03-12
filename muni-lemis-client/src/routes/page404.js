import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../component/util/board';
import image404 from '../component/images/404.svg';

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
