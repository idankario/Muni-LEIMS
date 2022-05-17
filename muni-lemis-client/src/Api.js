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

export async function getLowestSwitchboard() {
  const res = await fetch(`${API_URL}/statistics/lowest_switchboard`, {
    method: "GET",
  });
  const json = await res.json();
  return json;
}
export async function getSwitchboards(id) {
  const res = await fetch(`${API_URL}/swithchboards/${id}`, {
    method: "GET",
  });
  const json = await res.json();
  return json;
}

export async function getHighestSwitchboard() {
  const res = await fetch(`${API_URL}/statistics/high_Switchboard`, {
    method: "GET",
  });
  const json = await res.json();
  return json;
}

export async function getTopFiveSwitchboards() {
  const res = await fetch(`${API_URL}/statistics/top_five_switchboards`, {
    method: "GET",
  });
  const json = await res.json();
  // eslint-disable-next-line no-console
  console.log(json);
  return json;
}

export async function getLastFiveSwitchboards() {
  const res = await fetch(`${API_URL}/statistics/top_last_switchboards`, {
    method: "GET",
  });
  const json = await res.json();
  // eslint-disable-next-line no-console
  console.log(json);
  return json;
}

export async function getLowestMuncipalty() {
  const res = await fetch(`${API_URL}/statistics/lowest_Muncipalty`, {
    method: "GET",
  });
  const json = await res.json();
  // eslint-disable-next-line no-console
  console.log(json);
  return json;
}

export async function getHighestMuncipalty() {
  const res = await fetch(`${API_URL}/statistics/high_Muncipalty`, {
    method: "GET",
  });
  const json = await res.json();
  return json;
}

export async function getTopFiveMuncipalty() {
  const res = await fetch(`${API_URL}/statistics/top_five_Muncipalty`, {
    method: "GET",
  });
  const json = await res.json();
  // eslint-disable-next-line no-console
  console.log(json);
  return json;
}

export async function getLastFiveMuncipalty() {
  const res = await fetch(`${API_URL}/statistics/last_five_Muncipalty`, {
    method: "GET",
  });
  const json = await res.json();
  // eslint-disable-next-line no-console
  console.log(json);
  return json;
}

export async function isoffice() {
  const res = await fetch(`${API_URL}/office/type`, { method: "GET" });
  const json = await res.json();
  return json;
}
