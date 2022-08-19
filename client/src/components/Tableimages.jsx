import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table1 from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Table({ rows }) {
  const navigate = useNavigate();

  const moveDistanseMesure = (dd) => {
    navigate("/about", { state: { name: dd } });
  };
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "70%",
        height: "70%",
        position: "absolute",
        left: "50%",
        top: "58%",
        transform: "translate(-50%, -50%)",
        "&::-webkit-scrollbar": { width: `15px` },
        "&::--webkit-scrollbar-track ": { borderRadius: `10px` },
        "&::-webkit-scrollbar-thumb  ": {
          background: "#ECB22F",
          borderRadius: `10px`,
        },
        "&::-webkit-scrollbar-thumb:hover": { background: `white` },
        marginTop: "-3px",
      }}
      aria-label="simple table"
    >
      <Table1 sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow
            sx={{
              background: "linear-gradient(45deg, #CDFA00 30%, #ECB22F 90%)",
              opacity: 1,
              boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
            }}
          >
            <TableCell sx={{ color: `black`, fontSize: "30px" }}>
              Name
            </TableCell>
            <TableCell sx={{ color: `black`, fontSize: "30px" }}>
              Date
            </TableCell>
            <TableCell sx={{ color: `black`, fontSize: "30px" }}>
              Time
            </TableCell>
            <TableCell sx={{ color: `s`, fontSize: "30px" }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              onClick={() => moveDistanseMesure(row.image_name)}
              // eslint-disable-next-line react/no-array-index-key
              key={row.image_name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "&:hover": {
                  background: `linear-gradient(45deg, #CDFA00 40%, #ECB22F 90%)`,
                },
              }}
              // style={{textShadow: "3px 3px black",color:  "green"  }}
            >
              <TableCell sx={{ fontSize: "18px" }}>
                <strong>{row.image_name.split(" ")[2]} </strong>
              </TableCell>
              <TableCell sx={{ fontSize: "18px" }}>
                <strong>{row.image_name.split(" ")[0]} </strong>
              </TableCell>
              <TableCell sx={{ fontSize: "18px" }}>
                <strong>{row.image_name.split(" ")[1]} </strong>
              </TableCell>
              <TableCell sx={{ fontSize: "18px" }}>
                <strong>{row.is_active === 2 ? "Progress" : "Ready"} </strong>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table1>
    </TableContainer>
  );
}
