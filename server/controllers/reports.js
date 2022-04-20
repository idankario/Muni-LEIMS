import db from '../db_connection'


export async function getMunicipalities(req, res) {
    let query = `
    SELECT area, SUM(amount_streetlight) / consumption AS consumption_average
    FROM MuniLEIMS.statisticalreport
    WHERE area IS NOT NULL
    GROUP BY area`
    db.query(query, (err, result) => {
        res.send(JSON.stringify(result))
    })
    
}

export async function getCities(req, res) {
    let query = `
        SELECT city, AVG(sub.area_consumption) AS consumption_average FROM (
            SELECT city, SUM(amount_streetlight) / consumption AS area_consumption
            FROM MuniLEIMS.statisticalreport
            WHERE city IS NOT NULL
            GROUP BY city, area
        ) AS sub
        GROUP BY sub.city;`
    db.query(query, (err, result) => {
        res.send(JSON.stringify(result))
    })
}


