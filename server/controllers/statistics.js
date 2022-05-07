import db from "../db_connection";

export async function lowestCentral(req, res) {
  let query = `
    SELECT DISTINCT MIN(energy_inetensity) intensity, area FROM MuniLEIMS.statisticalreport
    WHERE area IS NOT NULL;
    `;
  db.query(query, (err, result) => {
    res.send(JSON.stringify(result));
  });
}

export async function highestCentral(req, res) {
  let query = `
    SELECT DISTINCT MAX(energy_inetensity) intensity, area FROM MuniLEIMS.statisticalreport
    WHERE area IS NOT NULL;
    `;
  db.query(query, (err, result) => {
    res.send(JSON.stringify(result));
  });
}

export async function getTopFiveCentral(req, res) {
  let query = `
    SELECT DISTINCT energy_inetensity intensity, area
    FROM MuniLEIMS.statisticalreport
    WHERE area IS NOT NULL AND energy_inetensity IS NOT NULL
    ORDER BY energy_inetensity DESC
    LIMIT 5
    `;
  db.query(query, (err, result) => {
    res.send(JSON.stringify(result));
  });
}

  export async function getLastFiveCentral(req, res) {
    let query = `
      SELECT DISTINCT energy_inetensity intensity, area
      FROM MuniLEIMS.statisticalreport
      WHERE area IS NOT NULL AND energy_inetensity IS NOT NULL
      ORDER BY energy_inetensity 
      LIMIT 5
      `;
    db.query(query, (err, result) => {
      res.send(JSON.stringify(result));
    });
}
