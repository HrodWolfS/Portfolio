import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { CustomCursor } from '@/components/custom-cursor';

export const metadata: Metadata = {
  title: 'Portfolio | Creative Developer',
  description: 'Portfolio minimaliste et futuriste',
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
      </body>
    </html>
  );
}