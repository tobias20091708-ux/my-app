import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Fraunces } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Bergur Rønne Moberg — Færøsk litteratur & ultraminor forskning",
    template: "%s | Bergur Rønne Moberg",
  },
  description:
    "Bergur Rønne Moberg er lektor ved Institut for Nordiske Studier og Sprogvidenskab (KU) og forsker i færøsk og nordatlantisk litteratur, William Heinesen og begrebet 'ultraminor litteratur'.",
  keywords: [
    "Bergur Rønne Moberg",
    "færøsk litteratur",
    "ultraminor litteratur",
    "William Heinesen",
    "Jørgen-Frantz Jacobsen",
    "Barbara",
    "NORDUNG",
    "nordisk identitet",
  ],
  openGraph: {
    title: "Bergur Rønne Moberg — Færøsk litteratur & ultraminor forskning",
    description:
      "Forskning og foredrag om færøsk og nordatlantisk litteratur, William Heinesen og ultraminor litteratur.",
    type: "website",
    locale: "da_DK",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090b",
};

const themeInitScript = `
(function () {
  try {
    var stored = window.localStorage.getItem('theme');
    if (stored === 'light') {
      document.documentElement.classList.add('light');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className="flex min-h-full flex-col bg-background font-sans text-foreground"
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
