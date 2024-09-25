import { AppHeader } from "@/widgets/header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHeader variant="auth" />
      {children}
    </>
  );
}
