import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Our Wedding",
  description: "Our wedding website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className}  antialiased`}>
        <Header />
        <div className="bg-yellow-light min-h-screen">{children}</div>
      </body>
    </html>
  );
}
