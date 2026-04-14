const BASE_URL = "http://localhost:3000";

export async function getSurahs() {
  const res = await fetch(`${BASE_URL}/surahs`);
  return res.json();
}

export async function getAyahs(id: string) {
  const res = await fetch(`${BASE_URL}/ayahs/${id}`);
  return res.json();
}

export async function getDuas() {
  const res = await fetch(`${BASE_URL}/duas`);
  return res.json();
}