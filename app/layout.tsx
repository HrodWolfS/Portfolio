import { Cursor } from "@/components/cursor";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Rodolphe Stempfel",
  description: "Portfolio de Rodolphe Stempfel, développeur web créatif",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} grid-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="grain"></div>
          <Navigation />
          {children}
          <Toaster richColors />
          <Cursor />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
