import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Country Information Directory",
  description: "SEO friendly country information website built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
