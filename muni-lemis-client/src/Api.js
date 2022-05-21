import axios from "axios";

const APIURL = `http://localhost:3000`;
const id = () => localStorage.getItem("user");

export async function getLowestSwitchboard() {
  const res = await fetch(`${APIURL}/switchboards/lowest/${id()}`, {
    method: "GET",
  });
  const json = await res.json();
  return json;
}
export async function getHighestSwitchboard() {
  const res = await fetch(`${APIURL}/switchboards/highest/${id()}`, {
    method: "GET",
  });
  const json = await res.json();
  return json;
}

export async function getTopFiveSwitchboards() {
  const res = await fetch(`${APIURL}/switchboards/top5/${id()}`, {
    method: "GET",
  });
  const json = await res.json();
  return json;
}
export async function getLastFiveSwitchboards() {
  const res = await fetch(`${APIURL}/switchboards/last5/${id()}`, {
    method: "GET",
  });
  const json = await res.json();
  return json;
}
export async function getSwitchboards() {
  const res = await fetch(`${APIURL}/switchboards/${id()}`, { method: "GET" });
  const json = await res.json();
  return json;
}

export async function TypeOffice() {
  console.log(id());
  try {
    const res = await axios({
      method: "GET",
      // headers: { 'x-access-token': localStorage.getItem('token') },
      url: `${APIURL}/offices/type/${id()}`,
    });
    console.log(res.data[0]);
    return res.data[0].res;
  } catch (error) {
    return error;
  }
}

export async function officebyId(idUser) {
  try {
    const res = await axios({
      method: "GET",
      // headers: { 'x-access-token': localStorage.getItem('token') },
      url: `${APIURL}/offices/${idUser}`,
    });

    return res.data[0];
  } catch (error) {
    return error;
  }
}

export async function loadMunicipalities() {
  const res = await fetch(`${APIURL}/municipalities`, { method: "GET" });
  const json = await res.json();
  return json;
}

export async function getLowestmunicipality() {
  const res = await fetch(`${APIURL}/municipalities/lowest`, {
    method: "GET",
  });
  const json = await res.json();
  return json;
}
export async function getHighestmunicipality() {
  const res = await fetch(`${APIURL}/municipalities/highest`, {
    method: "GET",
  });
  const json = await res.json();
  return json;
}
export async function getTopFivemunicipality() {
  const res = await fetch(`${APIURL}/municipalities/top5`, {
    method: "GET",
  });
  const json = await res.json();
  // eslint-disable-next-line no-console

  return json;
}

export async function getLastFivemunicipality() {
  const res = await fetch(`${APIURL}/municipalities/last5`, {
    method: "GET",
  });
  const json = await res.json();
  // eslint-disable-next-line no-console
  console.log(json);
  return json;
}

export async function getSwitchboardsMap() {
  const res = await fetch(`${APIURL}/switchboards/${id()}`, {
    method: "GET",
  });
  const json = await res.json();
  return json;
}
