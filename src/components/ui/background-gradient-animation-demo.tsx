import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(41, 40, 41)"
      gradientBackgroundEnd="rgb(31, 30, 31)"
      firstColor="101, 211, 171"
      secondColor="101, 211, 171"
      thirdColor="80, 190, 150"
      fourthColor="120, 200, 165"
      fifthColor="90, 180, 140"
      pointerColor="101, 211, 171"
      size="80%"
      blendingValue="hard-light"
      containerClassName="!fixed"
    >
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Gradients X Animations
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
