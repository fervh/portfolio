"use client";

import { useState, useEffect } from "react";
import type { CVData } from "./ResumePDF";
import { usePortraitImage } from "@/lib/usePortraitImage";

interface CVPreviewClientProps {
  data: CVData;
}

export default function CVPreviewClient({ data }: CVPreviewClientProps) {
  const portraitImage = usePortraitImage();
  const [PDFComponents, setPDFComponents] = useState<any>(null);
  const [ResumePDF, setResumePDF] = useState<any>(null);

  useEffect(() => {
    // Load @react-pdf/renderer dynamically on client side only
    Promise.all([
      import("@react-pdf/renderer"),
      import("./ResumePDF")
    ]).then(([pdfModule, resumeModule]) => {
      setPDFComponents({ PDFViewer: pdfModule.PDFViewer });
      setResumePDF(() => resumeModule.default);
    });
  }, []);

  if (!PDFComponents || !ResumePDF || !portraitImage) {
    return (
      <div className="cv-pdf-loading">
        <div className="spinner" />
        <p>Loading PDF preview...</p>
      </div>
    );
  }

  const { PDFViewer } = PDFComponents;

  return (
    <div className="cv-pdf-viewer-wrapper">
      <PDFViewer width="100%" height="100%" showToolbar={true}>
        <ResumePDF data={data} portraitImage={portraitImage} />
      </PDFViewer>
    </div>
  );
}
