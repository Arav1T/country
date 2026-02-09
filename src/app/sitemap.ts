import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  return countries.slice(0, 20).map((country: any) => ({
    url: `https://your-domain.com/countries/${country.name.common.toLowerCase()}`,
    lastModified: new Date(),
  }));
}
