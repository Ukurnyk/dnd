"use client";

import { AppSessionProvider } from "@/entities/user/session";
import { ThemeProvider } from "@/features/theme/theme-provider";
import { ComposeChildren } from "@/shared/lib/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <ComposeChildren>
      <AppSessionProvider />
      <QueryClientProvider client={queryClient} />
      <ThemeProvider />
      {children}
    </ComposeChildren>
  );
}
