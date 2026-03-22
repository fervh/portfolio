import type { Metadata } from "next";
import PDFTest from "@/components/PDFTest";

export const metadata: Metadata = {
  title: "PDF Test",
};

export default function TestPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>PDF Component Test</h1>
      <PDFTest />
    </div>
  );
}
