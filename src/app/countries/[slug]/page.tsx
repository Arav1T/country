import type { Metadata } from "next";
import { fetchCountryByName } from "@/lib/api";
import JsonLd from "@/components/JsonLd";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BackButton from "@/components/BackButton";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;

  const country = await fetchCountryByName(
    decodeURIComponent(slug)
  );

  return {
    title: country.name.common,
    description: `Details about ${country.name.common}`,
  };
}


export default async function CountryPage({ params }: PageProps) {
  const { slug } = await params;

  const country = await fetchCountryByName(
    decodeURIComponent(slug)
  );

  
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Country",
    name: country.name.common,
    capital: country.capital?.[0],
    region: country.region,
    subregion: country.subregion,
    population: country.population,
    url: `https://country-mu-beige.vercel.app/countries/${encodeURIComponent(
      country.name.common
    )}`,
  };

  return (
    <>
      
      <JsonLd data={jsonLdData} />

      <main className="min-h-screen bg-linear-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-6">
          <div className="max-w-xl mx-auto ">
        <BackButton />
        
        <Card
          className="
            w-full max-w-xl
            bg-white/10
            backdrop-blur-md
            border border-white/20
            text-white
            shadow-2xl
            transition-all
            duration-300
            hover:scale-[1.02]
          "
        >
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold tracking-wide">
              {country.name.common}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 text-lg text-white/90">
            <div className="flex justify-between">
              <span className="font-semibold">Capital</span>
              <span>{country.capital?.[0] || "—"}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Region</span>
              <span>{country.region}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Subregion</span>
              <span>{country.subregion || "—"}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Population</span>
              <span>
                {country.population.toLocaleString("en-US")}
              </span>
            </div>
          </CardContent>
        </Card>
        </div>
      </main>
    </>
  );
}
