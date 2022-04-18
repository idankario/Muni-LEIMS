import React from 'react';
import Styles from '../style/table.module.scss';

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
            style={{ color: row.consumption_average > 321 ? 'red' : 'green' }}
          >
            <td>{row.count}</td>
            <td>{row.city || row.area}</td>
            <td>{row.consumption_average || row['consumption average']}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
