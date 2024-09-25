import { AppHeader } from "@/widgets/header/ui/index";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("private");
  return (
    <>
      <AppHeader variant="private" />
      {children}
    </>
  );
}
