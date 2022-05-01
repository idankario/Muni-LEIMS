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
