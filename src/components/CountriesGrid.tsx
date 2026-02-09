"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ITEMS_PER_PAGE = 12;

export default function CountriesGrid({
  countries,
}: {
  countries: any[];
}) {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        setVisibleCount((prev) =>
          Math.min(prev + ITEMS_PER_PAGE, countries.length)
        );
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [countries.length]);

  return (
    <main className="min-h-screen bg-linear-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-8">
      <h1 className="text-4xl font-bold mb-10 text-center text-white flex items-center justify-center gap-2">
  <span className="inline-block animate-[spin_8s_linear_infinite]">
    🌍
  </span>
  Explore Countries
</h1>



      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.slice(0, visibleCount).map((country: any) => (
          <Link
            key={country.cca3}
            href={`/countries/${encodeURIComponent(
              country.name.common
            )}`}
          >
            <Card
              className="
                cursor-pointer
                bg-white/10
                backdrop-blur-md
                border border-white/20
                text-white
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                hover:border-white/40
              "
            >
              <CardHeader>
                <CardTitle className="text-xl">
                  {country.name.common}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-sm text-white/80">
                <p>Region: {country.region}</p>
                <p>
                  Population:{" "}
                  {country.population?.toLocaleString("en-US")}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {visibleCount < countries.length && (
        <p className="text-center text-white/70 mt-10">
          Loading more countries…
        </p>
      )}
    </main>
  );
}
