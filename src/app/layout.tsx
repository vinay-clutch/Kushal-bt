import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kushal B T | Portfolio",
  description: "Electronics & Communication Engineering Student building intelligent embedded systems and modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
