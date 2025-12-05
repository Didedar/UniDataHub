import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StickyHeader } from "@/components/layout/StickyHeader";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UniDataHub - Kazakhstan University Catalog",
  description: "Comprehensive catalog of universities in Kazakhstan with 3D tours and comparison tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <StickyHeader />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
