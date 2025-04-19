"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download } from "lucide-react";
import { CVDocument } from "./cv-document";

export function PDFDownloadButton() {
  return (
    <PDFDownloadLink
      document={<CVDocument />}
      fileName="rodolphe-stempfel-cv.pdf"
      className="glassmorphism px-6 py-2 rounded-full hover:bg-[rgb(var(--accent-neon))] hover:text-black transition-all flex items-center gap-2"
    >
      {({ loading }) =>
        loading ? (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <Download size={16} />
            Télécharger CV
          </>
        )
      }
    </PDFDownloadLink>
  );
}
