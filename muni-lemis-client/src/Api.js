<<<<<<< HEAD
const API_URL = `https://muni-leims.herokuapp.com`;

export async function uploadImage(file, city, area, consumption) {
  const data = new FormData();
  data.append("file", file);
  data.append("area", area);
  data.append("city", city);
  data.append("consumption", consumption);
  const res = await fetch(`${API_URL}/imgupload/upload`, {
    method: "POST",
    body: data,
  });
  return res;
}

export async function loadMunicipalities() {
  const res = await fetch(`${API_URL}/data/municipalities`, { method: "GET" });
  const json = await res.json();
  return json;
}

export async function loadCities() {
  const res = await fetch(`${API_URL}/data/cities`, { method: "GET" });
  const json = await res.json();
  return json;
}

export async function getLowestCentral() {
  const res = await fetch(`${API_URL}/statistics/low_central`, {
    method: "GET",
  });
  const json = await res.json();
  return json;
}

export async function getHighestCentral() {
  const res = await fetch(`${API_URL}/statistics/high_central`, {
    method: "GET",
  });
  const json = await res.json();
  return json;
}

export async function getTopCentral() {
  const res = await fetch(`${API_URL}/statistics/top_central`, {
    method: "GET",
  });
  const json = await res.json();
  // eslint-disable-next-line no-console
  console.log(json);
  return json;
}
=======
const HOST='localhost'
const PROTOCOL='http'
const PORT=3000
const API_URL = `${PROTOCOL}://${HOST}:${PORT}`

export async function uploadImage(file, city, area, consumption) {
    var data = new FormData()
    data.append('file', file)
    data.append('area', area)
    data.append('city', city)
    data.append('consumption', consumption)
    let res = await fetch(`${API_URL}/imgupload/upload`, {method: 'POST', body: data})
    // res = await res.json()
    return res
}

export async function loadMunicipalities() {
    let res = await fetch(`${API_URL}/data/municipalities`, {method: 'GET'})
    let json = await res.json()
    return json
}

export async function loadCities() {
    let res = await fetch(`${API_URL}/data/cities`, {method: 'GET'})
    let json = await res.json()
    return json
}


export async function getLowestCentral() {
    let res = await fetch(`${API_URL}/statistics/low_central`, {method: 'GET'})
    let json = await res.json()
    return json
}


export async function getHighestCentral() {
    let res = await fetch(`${API_URL}/statistics/high_central`, {method: 'GET'})
    let json = await res.json()
    return json
}


export async function getTopCentral() {
    let res = await fetch(`${API_URL}/statistics/top_central`, {method: 'GET'})
    
    let json = await res.json()
    console.log(json)
    return json
}
>>>>>>> d575c30f48cb674b8f3f5faa4782b648122fa246
