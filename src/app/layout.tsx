import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MK Portfolio",
  description: "NextJs portfolio of Martin Kretzschmar",
  icons: {
    icon: ['/favicon.ico?v=4']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Header />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
