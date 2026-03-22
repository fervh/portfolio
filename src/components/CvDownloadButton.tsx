"use client";

import { Download } from "lucide-react";

export default function CvDownloadButton() {
  const handleDownload = () => {
    const previousTitle = document.title;
    document.title = "Fernando-Vela-Hidalgo-CV";
    
    // Add slight delay to ensure title is set
    setTimeout(() => {
      window.print();
    }, 100);
    
    // Restore title after print dialog
    const restoreTitle = () => {
      document.title = previousTitle;
      window.removeEventListener("afterprint", restoreTitle);
    };
    
    window.addEventListener("afterprint", restoreTitle);
    
    // Fallback in case afterprint doesn't fire
    setTimeout(() => {
      document.title = previousTitle;
    }, 1000);
  };

  return (
    <button
      type="button"
      className="cv-download-btn"
      onClick={handleDownload}
      aria-label="Download CV as PDF"
    >
      <Download size={18} aria-hidden="true" />
      Download PDF
    </button>
  );
}
