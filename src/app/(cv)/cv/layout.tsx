import CVTopBar from "@/components/CVTopBar";
import TopBarMask from "@/components/TopBarMask";
import TopBarSpacer from "@/components/TopBarSpacer";

export default function CVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopBarMask />
      <CVTopBar />
      <TopBarSpacer>
        <main className="page">{children}</main>
      </TopBarSpacer>
    </>
  );
}
