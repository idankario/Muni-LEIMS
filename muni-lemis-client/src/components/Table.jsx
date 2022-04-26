<<<<<<< HEAD
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
=======
import React from "react";
import Styles from "../style/table.module.scss";

function Table({ rows, dataName }) {
  return (
    <table className={`${Styles.table}`}>
      <thead>
        <th>Rate</th>
        <th>{dataName}</th>
        <th>Energy intensity</th>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr
            style={{ color: row.consumption_average > 321 ? "red" : "green" }}
          >
            <td>{row.count}</td>
            <td>{row.city || row.area}</td>
            <td>{row.consumption_average || row["consumption average"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
>>>>>>> origin/master
