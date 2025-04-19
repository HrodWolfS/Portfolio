"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";

// Composant qui sera chargé dynamiquement côté client uniquement
const PDFDownloadButton = dynamic(
  () => import("./pdf-download-button").then((mod) => mod.PDFDownloadButton),
  { ssr: false }
);

export function DownloadCVButton() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Affiche un placeholder en attendant le chargement du composant
  if (!isClient) {
    return (
      <button className="glassmorphism px-6 py-2 rounded-full hover:bg-[rgb(var(--accent-neon))] hover:text-black transition-all flex items-center gap-2">
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        Télécharger CV
      </button>
    );
  }

  return (
    <Suspense
      fallback={
        <button className="glassmorphism px-6 py-2 rounded-full hover:bg-[rgb(var(--accent-neon))] hover:text-black transition-all flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Télécharger CV
        </button>
      }
    >
      <PDFDownloadButton />
    </Suspense>
  );
}
