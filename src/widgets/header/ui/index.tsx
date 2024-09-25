import Layout from "./Layout";
import HeaderNav from "./HeaderNav";
import Profile from "./Profile";
import { ToggleTheme } from "../../../features/theme/toggle-theme";

export function AppHeader({
  variant,
}: {
  variant: "auth" | "private" | "public";
}) {
  const isProfile = variant !== "auth";
  return (
    <Layout
      nav={<HeaderNav />}
      profile={isProfile && <Profile />}
      actions={<ToggleTheme />}
    />
  );
}
