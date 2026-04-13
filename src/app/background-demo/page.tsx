import type { Metadata } from "next";
import { BackgroundGradientAnimationDemo } from "@/components/ui/background-gradient-animation-demo";

export const metadata: Metadata = {
  title: "Background Demo",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BackgroundDemoPage() {
  return <BackgroundGradientAnimationDemo />;
}
