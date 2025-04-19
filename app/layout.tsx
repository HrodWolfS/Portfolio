import { CustomCursor } from "@/components/custom-cursor";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Creative Developer",
  description: "Portfolio minimaliste et futuriste",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <div className="grain" />
          <div className="grid-background">
            <Navigation />
            <CustomCursor />
            <main className="min-h-screen">{children}</main>
          </div>
        </ThemeProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
