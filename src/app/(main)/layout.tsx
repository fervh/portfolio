import TopBar from "@/components/TopBar";
import TopBarMask from "@/components/TopBarMask";
import TopBarSpacer from "@/components/TopBarSpacer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopBarMask />
      <TopBar />
      <TopBarSpacer>
        <main className="page">{children}</main>
      </TopBarSpacer>
    </>
  );
}
