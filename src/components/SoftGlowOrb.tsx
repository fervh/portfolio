type SoftGlowOrbProps = {
  color?: string;
};

export default function SoftGlowOrb({ color = "#c56a2d" }: SoftGlowOrbProps) {
  return (
    <div
      className="soft-glow-orb"
      style={{ ["--glow" as string]: color }}
      aria-hidden="true"
    />
  );
}
