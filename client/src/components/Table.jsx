import React from "react";
import { styled } from "@mui/material/styles";

const TableStyle = styled("table")({
  display: `block`,
  fontWeight: `bold`,
  textAlign: `center`,
  width: `100%`,
  fontSize: `2.5em`,
  marginTop: `20px`,
  borderCollapse: `collapse`,
  maxHeight: `70vh`,
  overflow: `auto`,
  "&::-webkit-scrollbar": {
    width: `15px`,
  },

  /* Track */
  "&::--webkit-scrollbar-track ": {
    background: `rgba(255, 255, 255, 0.5)`,
    borderRadius: `10px`,
  },
  /* Handle */
  "&::-webkit-scrollbar-thumb  ": {
    background: `#7bd529`,
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
  width: "10%",
  color: `white`,
  textShadow: `3px 3px black`,
  borderBottom: `10px solid white`,
});

const Td = styled("td")({
  borderLeft: `8px solid white`,
  borderRight: `8px solid white`,
});
export default function Table({ rows, dataName }) {
  const avg = 321;
  return (
    <TableStyle>
      <thead>
        <tr>
          <Th>Rate</Th>
          <Th>{dataName}</Th>
          <Th>
            Energy Intensity{" "}
            <p style={{ fontSize: "2vw" }}>
              Average Consumption per Streetlight
            </p>
          </Th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr
            // eslint-disable-next-line react/no-array-index-key
            key={row.municipality || row.area}
            style={{
              textShadow: "3px 3px black",
              color: row.consumption_average > avg ? "red" : "green",
            }}
          >
            <td>{index + 1}</td>
            <Td>{row.municipality || row.area}</Td>
            <td>
              {row.consumption_average || row["consumption average"]} kWh{" "}
            </td>
          </tr>
        ))}
      </tbody>
    </TableStyle>
  );
}
