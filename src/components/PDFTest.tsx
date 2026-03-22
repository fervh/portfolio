"use client";

import { useEffect, useState } from "react";

export default function PDFTest() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function testPDF() {
      try {
        console.log("1. Loading @react-pdf/renderer...");
        const pdfModule = await import("@react-pdf/renderer");
        console.log("2. Loaded successfully:", Object.keys(pdfModule));

        console.log("3. Loading ResumePDF...");
        const resumeModule = await import("./ResumePDF");
        console.log("4. ResumePDF loaded:", resumeModule.default);

        console.log("5. Creating test data...");
        const testData = {
          name: "Test Name",
          role: "Test Role",
          headline: "Test headline",
          email: "test@test.com",
          linkedin: "linkedin.com/test",
          github: "github.com/test",
          website: "test.com",
          location: "Test Location",
          summary: "Test summary",
          impactHighlights: ["Test 1", "Test 2"],
          leadershipAreas: ["Test 1"],
          autonomyExpertise: ["Test 1"],
          systemsReliability: ["Test 1"],
          experience: [],
          projects: [],
          education: [],
          skillGroups: [],
          certificationGroups: [],
          languages: "Test languages",
        };

        console.log("6. Test completed successfully!");
        setLoading(false);
      } catch (err: any) {
        console.error("Error:", err);
        setError(err.message || String(err));
        setLoading(false);
      }
    }

    testPDF();
  }, []);

  if (loading) return <div>Testing PDF components...</div>;
  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;
  return <div style={{ color: "green" }}>PDF components loaded successfully!</div>;
}
