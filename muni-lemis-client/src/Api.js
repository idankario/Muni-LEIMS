const API_URL = `http://localhost:3000`;

export async function uploadImage(file, municipality, area, consumption) {
  const data = new FormData();
  data.append("file", file);
  data.append("area", area);
  data.append("municipality", municipality);
  data.append("consumption", consumption);
  const res = await fetch(`${API_URL}/imgupload/upload`, {
    method: "POST",
    body: data,
  });
  return res;
}

export async function typeOffice(id) {
  const res = await fetch(`${API_URL}/offices/type/${id}`, {
    method: "GET",
  });
  const json = await res.json();

  return json;
}


export async function loadMunicipalities() {
  const res = await fetch(`${API_URL}/data/municipalities`, { method: "GET" });
  const json = await res.json();
  return json;
}

export async function officebyId(id) {
  const res = await fetch(`${API_URL}/offices/${id}`, { method: "GET" });
  const json = await res.json();
  return json;
}

export async function loadswitchboards() {
  const res = await fetch(`${API_URL}/data/switchboards`, { method: "GET" });
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

export async function getLowestmunicipality() {
  const res = await fetch(`${API_URL}/statistics/lowest_municipality`, {
    method: "GET",
  });
  const json = await res.json();
  // eslint-disable-next-line no-console
  console.log(json);
  return json;
}

export async function getHighestmunicipality() {
  const res = await fetch(`${API_URL}/statistics/high_municipality`, {
    method: "GET",
  });
  const json = await res.json();
  return json;
}

export async function getTopFivemunicipality() {
  const res = await fetch(`${API_URL}/statistics/top_five_municipality`, {
    method: "GET",
  });
  const json = await res.json();
  // eslint-disable-next-line no-console
  console.log(json);
  return json;
}

export async function getLastFivemunicipality() {
  const res = await fetch(`${API_URL}/statistics/last_five_municipality`, {
    method: "GET",
  });
  const json = await res.json();
  // eslint-disable-next-line no-console
  console.log(json);
  return json;
}

