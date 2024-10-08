import type { Metadata } from "next";
import { Jost } from "next/font/google"
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Portfolio",
  description: "NextJS and Tailwind Portfolio",
};

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-us">
      <body className={jost.variable} >
        {children}
      </body>
    </html>
  );
}
