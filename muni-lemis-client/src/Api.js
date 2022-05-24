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
  try {
    const res = await axios({
      method: "GET",
      headers: { "x-access-token": localStorage.getItem("token") },
      url: `${APIURL}/offices/type/${id()}`,
    });

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

export async function getLowestMunicipality() {
  const res = await fetch(`${APIURL}/municipalities/lowest`, {
    method: "GET",
  });
  const json = await res.json();
  return json;
}
export async function getHighestMunicipality() {
  const res = await fetch(`${APIURL}/municipalities/highest`, {
    method: "GET",
  });
  const json = await res.json();
  return json;
}
export async function getTopFiveMunicipality() {
  const res = await fetch(`${APIURL}/municipalities/top5`, {
    method: "GET",
  });
  const json = await res.json();
  // eslint-disable-next-line no-console

  return json;
}

export async function getLastFiveMunicipality() {
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
export async function getSwLocation() {
  const res = await fetch(`${APIURL}/switchboards/location/${id()}`, {
    method: "GET",
  });
  const json = await res.json();
  return json;
}

export async function getAllSwLocation() {
  const res = await fetch(`${APIURL}/switchboards/locations`, {
    method: "GET",
  });
  const json = await res.json();
  return json;
}

export async function postUploadImage(data) {
  try {
    const res = await axios({
      method: "post",
      url: `${APIURL}/images`,
      data: { ...data },
      headers: { "x-access-token": localStorage.getItem("token") },
    });
    if (res.data) {
      // console.log(res.data);
      return;
    }
  } catch (error) {
    console.log(error);
  }
}
