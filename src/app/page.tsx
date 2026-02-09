
import { fetchAllCountries } from "@/lib/api";
import CountriesGrid from "@/components/CountriesGrid";

export default async function HomePage() {
  const countries = await fetchAllCountries();

  return <CountriesGrid countries={countries} />;
}
