/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';


function Info() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleClickOpen = ()=>{
    const info =
      'On this page where there is a municipality you enter the municipality name that you work for it after theat the consumption index of the swithcboard , in next feild the switchboards numbers you have in the area ,and the area name , at the end the cordinate of the area image after you fill this information click in uplaod image to uplaod the image to the ditaction.';
    setOpen(true);
      setDescription(info);
      setTitle('WHAT TO DO IN UPLAOD IMAGE PAGE:');
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography>
        WHAT TO DO HERE ?! &nbsp;
        <Link
          to
          onClick={() => handleClickOpen(0)}
          underline="always"
          sx={{ color: 'text.primary' }}
        >
         CLICK HERE TO KNOW:)
        </Link>
      </Typography>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default Info;