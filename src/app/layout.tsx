import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['500','600'],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zenstreet.ai",
  description: "Automated AI-Enabled Practice Management Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
