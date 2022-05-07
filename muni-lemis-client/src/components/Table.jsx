import React from "react";
import { styled } from "@mui/material/styles";

const TableStyle = styled("table")({
  display: `block`,
  fontWeight: `bold`,
  textAlign: `center`,
  width: `75vw`,
  fontSize: `2.3em`,
  marginTop: `20px`,
  borderCollapse: `collapse`,
  maxHeight: `70vh`,
  overflow: `auto`,
  "&::-webkit-scrollbar": {
    width: `18px`,
  },
  /* Track */
  "&::--webkit-scrollbar-track ": {
    background: `rgba(255, 255, 255, 0.5)`,
    borderRadius: `10px`,
  },
  /* Handle */
  "&::-webkit-scrollbar-thumb  ": {
    background: `white`,
    borderRadius: `10px`,
  },
  /* Handle on hover */
  "&::-webkit-scrollbar-thumb:hover": {
    background: `white`,
  },
  "&tbody": {
    "&::before": {
      content: '""',
      display: `block`,
      height: `15px`,
    },
  },

  "&td": {
    paddingLeft: `5px`,
    paddingRight: `5px`,
    margin: `0`,
  },
});

const Th = styled("th")({
  width: "33%",
  color: `white`,
  borderBottom: `3px solid white`,
});
const Td = styled("td")({
  borderLeft: `2px solid white`,
  borderRight: `2px solid white`,
});
export default function Table({ rows, dataName }) {
  return (
    <TableStyle>
      <thead>
        <tr>
          <Th>Rate</Th>
          <Th>{dataName}</Th>
          <Th>Energy Intensity (Conumption/StreetLights)</Th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            style={{ color: row.consumption_average > 321 ? "red" : "green" }}
          >
            <td>{row.count}</td>
            <Td>{row.city || row.area}</Td>
            <td>{row.consumption_average || row["consumption average"]}</td>
            {/* <Th>(Conumption/StreetLights)</Th> */}
          </tr>
        ))}
      </tbody>
    </TableStyle>
  );
}
