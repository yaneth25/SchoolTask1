import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SchoolTask",
  description: "Tu agenda en orden, tu vida en orden."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
