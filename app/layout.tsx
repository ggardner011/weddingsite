import type { Metadata } from "next";
import { Raleway, Playfair_Display } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Our Wedding",
  description: "Graeson and Elenas wedding website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${raleway.variable} ${playfair.variable}`}>
        <Header />
        <div className="bg-yellow-light min-h-screen">{children}</div>
      </body>
    </html>
  );
}
