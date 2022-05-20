import axios from "axios";

const API_URL = `http://localhost:3000`;

export async function TypeOffice(id) {
  try {
    const res = await axios({
      method: "GET",
      // headers: { 'x-access-token': localStorage.getItem('token') },
      url: `${API_URL}/offices/type/${id}`,
    });

    return res.data[0].res;
  } catch (error) {
    return error;
  }
}

export async function loadMunicipalities() {
  const res = await fetch(`${API_URL}/data/municipalities`, { method: "GET" });
  const json = await res.json();
  return json;
}

export async function officebyId(id) {
  try {
    const res = await axios({
      method: "GET",
      // headers: { 'x-access-token': localStorage.getItem('token') },
      url: `${API_URL}/offices/${id}`,
    });
    console.log(res.data[0]);

    return res.data[0];
  } catch (error) {
    console.log(error);
    return error;
  }
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
