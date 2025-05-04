import { RootLayoutClient } from "@/components/root-layout-client";
import { BackgroundSwitcher } from "@/components/ui/background-switcher";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Rodolphe Stempfel",
  description: "Développeur web en reconversion",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <RootLayoutClient>
          <BackgroundSwitcher />
          <div className="relative z-20">{children}</div>
          <Analytics />
        </RootLayoutClient>
      </body>
    </html>
  );
}
