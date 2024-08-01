import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Тілашар",
  description: "той",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[url('/all-bg.jpg')]">{children}</body>
    </html>
  );
}
