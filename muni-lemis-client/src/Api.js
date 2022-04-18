const HOST = 'localhost';
const PROTOCOL = 'http';
const PORT = 3000;
const API_URL = `${PROTOCOL}://${HOST}:${PORT}`;

export async function uploadImage(file, city, area, consumption) {
  const data = new FormData();
  data.append('file', file);
  data.append('area', area);
  data.append('city', city);
  data.append('consumption', consumption);
  const res = await fetch(`${API_URL}/imgupload/upload`, {
    method: 'POST',
    body: data,
  });
  // res = await res.json()
  return res;
}

export async function loadMunicipalities() {
  const res = await fetch(`${API_URL}/data/municipalities`, { method: 'GET' });
  const json = await res.json();
  return json;
}

export async function loadCities() {
  const res = await fetch(`${API_URL}/data/cities`, { method: 'GET' });
  const json = await res.json();
  return json;
}
