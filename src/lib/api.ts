const BASE_URL = "https://restcountries.com/v3.1";


export async function fetchAllCountries() {
  const res = await fetch(
    `${BASE_URL}/all?fields=name,cca3,capital,region,population`,
    {
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    console.error("API ERROR:", res.status);
    throw new Error("Failed to fetch countries");
  }

  return res.json();
}


export async function fetchCountryByName(name: string) {
  const res = await fetch(
    `${BASE_URL}/name/${encodeURIComponent(name)}?fullText=true`,
    {
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    console.error("API ERROR:", res.status);
    throw new Error("Failed to fetch country details");
  }

  const data = await res.json();
  return data[0];
}
