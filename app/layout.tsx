import type { Metadata } from 'next';

import Header from '@/app/ui/components/header';
import { inter } from '@/app/ui/fonts';
import '@/app/ui/globals.css';

export const metadata: Metadata = {
  title: 'Монголын Явган Алхалтын Холбоо',
  description: 'Монголын явган алхалтын холбооны албан ёсны вэбсайт',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      <body className={`${inter.className} relative antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
