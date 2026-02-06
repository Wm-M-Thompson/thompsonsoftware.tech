import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar"; // <-- Add this line

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thompson Software",
  description: "Thompson Software Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="pt-20">{children}</main> {/* pt-20 gives space below fixed nav */}
      </body>
    </html>
  );
}