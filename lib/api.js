const API_URL = "https://addis-eats-backend.onrender.com/menu/";

export async function getMenu() {
  // Cached for 1 hour; identical calls in one render are de-duplicated.
  const res = await fetch(API_URL, { next: { revalidate: 3600 } });
  if (!res.ok) {
    throw new Error(`Menu API failed with status ${res.status}`);
  }
  const json = await res.json();
  return json.data;
}

export async function getDish(id) {
  const dishes = await getMenu();
  return dishes.find((d) => d.id === id) ?? null;
}