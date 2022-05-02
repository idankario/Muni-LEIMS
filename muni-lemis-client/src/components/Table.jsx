<<<<<<< HEAD
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
          <Th>Energy intensity</Th>
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
          </tr>
        ))}
      </tbody>
    </TableStyle>
  );
}
=======
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react'

const TableStyle = styled.table`
  display: block;
  font-weight: bold;
  text-align: center;
  width: 75vw;
  font-size: 2.3em;
  margin-top: 20px;
  border-collapse: collapse;
  max-height: 70vh;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 18px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: rgba(255,255,255, 0.5);
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: white;
  }

  tbody {
    &::before {
      content: '';
      display: block;
      height: 15px;
    }
  }

  th {
      width: 33.3%;
      color: white;
      border-bottom: 3px solid white;
  }

  td {
      padding-left: 5px;
      padding-right: 5px;
      margin: 0;
  }

  td:nth-child(2n) {
      border-left: 2px solid white;
      border-right: 2px solid white;
  }
`


export default function Table({ rows, dataName }) {
  return (
    <>
      <TableStyle>
        <thead>
          <th>Rate</th>
          <th>{dataName}</th>
          <th>Energy intensity</th>
        </thead>
        <tbody>
          {
            rows.map((row, index) =>
              <tr key={index} style={{ color: row.consumption_average > 321 ? 'red' : 'green' }}>
                <td>{row.count}</td>
                <td>{row.city || row.area}</td>
                <td>{row.consumption_average || row['consumption average']}</td>
              </tr>
            )
          }
        </tbody>
      </TableStyle>
    </>
  )
}
>>>>>>> d575c30f48cb674b8f3f5faa4782b648122fa246
