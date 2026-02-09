import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const res = await fetch("https://restcountries.com/v3.1/all", {
    cache: "no-store",
  });

  if (!res.ok) {
    return [];
  }

  const countries = await res.json();


  if (!Array.isArray(countries)) {
    return [];
  }

  return countries.slice(0, 20).map((country: any) => ({
    url: `https://country-mu-beige.vercel.app/countries/${encodeURIComponent(
      country.name.common.toLowerCase()
    )}`,
    lastModified: new Date(),
  }));
}
