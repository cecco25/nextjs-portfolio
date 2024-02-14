import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Michael | Personal Portfolio",
  description: "Built with NextJS",
  icons: {
    icon: [
      '/favicon.ico?v=',
    ],
    apple: [
      '/apple-touch-icon.png?v=4',
    ],
    shortcut: [
      'apple-touch-icon.png'
    ]
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
