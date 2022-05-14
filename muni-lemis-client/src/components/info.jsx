/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import Paper from "@mui/material/Paper";
import InfoUpload from "./images/infoUpload.png";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
function Info() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleClickOpen = () => {
    const info = `Enter munciplity name </br> 
    Enter swithbords numbers </br> 
       Fill in the details according to the picture attached below`;
    setOpen(true);
    setDescription(info);
    setTitle("INFORMATION HOW TO  UPLAOD IMAGE");
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography>
        <Link
          to
          onClick={() => handleClickOpen(0)}
          underline="always"
          sx={{ color: "text.primary" }}
        >
          CLICK HERE TO GET MORE INFO:)
        </Link>
      </Typography>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <img src={InfoUpload} alt="Info upload" title="Info upload" />
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
