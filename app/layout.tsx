import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freedom Up North | Public Sector Technology Advisory",
  description:
    "Independent technology advisory for municipalities, transit authorities, airports, and regional agencies across Northern Michigan. Cybersecurity assessments, modernization roadmaps, and vendor-neutral guidance.",
  keywords: [
    "public sector technology advisory",
    "municipal technology consultant",
    "Northern Michigan",
    "Traverse City",
    "cybersecurity assessment",
    "government technology modernization",
    "transit technology",
    "airport technology",
    "vendor-neutral advisory",
  ],
  authors: [{ name: "Freedom Up North LLC" }],
  openGraph: {
    title: "Freedom Up North | Public Sector Technology Advisory",
    description:
      "Independent technology advisory for municipalities, transit authorities, airports, and regional agencies across Northern Michigan.",
    url: "https://freedomupnorth.com",
    siteName: "Freedom Up North",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
