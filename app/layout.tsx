import type { Metadata } from "next";
import { Lato } from "next/font/google";

import { Footer, Header } from "@/components/global";
import "./globals.css";

const lato = Lato({ weight: ["300", "400", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imagine Web",
  description: "IMAGINE INTEGRATED SYSTEMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} relative text-grey`}>
        <Header />
        {children}
        <Footer /> 
      </body>
    </html>
  );
}
