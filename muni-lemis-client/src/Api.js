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
  const res = await fetch(`${API_URL}/municipalities`, { method: "GET" });
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

export async function loadareas() {
  const res = await fetch(`${API_URL}/areas`, { method: "GET" });
  const json = await res.json();
  return json;
}


export async function getLowestSwitchboard() {
  const res = await fetch(`${API_URL}/swithchboards/lowest`, {
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
  const res = await fetch(`${API_URL}/swithchboards/high`, {
    method: "GET",
  });
  const json = await res.json();
  return json;
}

export async function getTopFiveSwitchboards() {
  const res = await fetch(`${API_URL}/swithchboards/top`, {
    method: "GET",
  });
  const json = await res.json();
  // eslint-disable-next-line no-console
  console.log(json);
  return json;
}

export async function getLastFiveSwitchboards() {
  const res = await fetch(`${API_URL}/swithchboards/top`, {
    method: "GET",
  });
  const json = await res.json();
  // eslint-disable-next-line no-console
  console.log(json);
  return json;
}

export async function getLowestmunicipality() {
  const res = await fetch(`${API_URL}/municipalities/lowest`, {
    method: "GET",
  });
  const json = await res.json();
  // eslint-disable-next-line no-console
  console.log(json);
  return json;
}

export async function getHighestmunicipality() {
  const res = await fetch(`${API_URL}/municipalities/high`, {
    method: "GET",
  });
  const json = await res.json();
  return json;
}

export async function getTopFivemunicipality() {
  const res = await fetch(`${API_URL}/municipalities/top`, {
    method: "GET",
  });
  const json = await res.json();
  // eslint-disable-next-line no-console
  console.log(json);
  return json;
}

export async function getLastFivemunicipality() {
  const res = await fetch(`${API_URL}/municipalities/last`, {
    method: "GET",
  });
  const json = await res.json();
  // eslint-disable-next-line no-console
  console.log(json);
  return json;
}
