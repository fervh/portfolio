"use client";

import { Download } from "lucide-react";
import { useState, useEffect } from "react";
import type { CVData } from "./ResumePDF";
import { usePortraitImage } from "@/lib/usePortraitImage";

interface CVDownloadClientProps {
  data: CVData;
  fileName?: string;
}

export default function CVDownloadClient({ 
  data, 
  fileName = "Fernando_Vela_Hidalgo_CV.pdf" 
}: CVDownloadClientProps) {
  const portraitImage = usePortraitImage();
  const [components, setComponents] = useState<{
    PDFDownloadLink: any;
    ResumePDF: any;
  } | null>(null);

  useEffect(() => {
    // Load both @react-pdf/renderer and ResumePDF dynamically
    Promise.all([
      import("@react-pdf/renderer"),
      import("./ResumePDF")
    ]).then(([pdfModule, resumeModule]) => {
      setComponents({
        PDFDownloadLink: pdfModule.PDFDownloadLink,
        ResumePDF: resumeModule.default,
      });
    });
  }, []);

  if (!components || !portraitImage) {
    return (
      <button
        type="button"
        className="cv-download-btn"
        disabled
        aria-label="Preparing PDF download"
      >
        <Download size={18} aria-hidden="true" />
        Preparing PDF...
      </button>
    );
  }

  const { PDFDownloadLink, ResumePDF } = components;

  return (
    <PDFDownloadLink
      document={<ResumePDF data={data} portraitImage={portraitImage} />}
      fileName={fileName}
      className="cv-download-btn"
      aria-label="Download CV as PDF"
    >
      {({ loading, error }: { loading: boolean; error: Error | null }) => {
        if (error) {
          return (
            <>
              <Download size={18} aria-hidden="true" />
              Error generating PDF
            </>
          );
        }
        
        if (loading) {
          return (
            <>
              <div className="spinner-small" />
              Generating PDF...
            </>
          );
        }
        
        return (
          <>
            <Download size={18} aria-hidden="true" />
            Download PDF
          </>
        );
      }}
    </PDFDownloadLink>
  );
}
