import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MK Portfolio',
  description: 'NextJs portfolio of Martin Kretzschmar',
  icons: {
    icon: ['/favicon.ico?v=4'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={`bg-slate-700 ${inter.className}`}>
        <Header />
        <h1>This is the main layout</h1>
        {children}
        <Footer />
      </body>
    </html>
  );
}
