"use client";

import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";

export function RootLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <Navigation />
      {children}
    </ThemeProvider>
  );
}
