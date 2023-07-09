"use client";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "jotai";
import { queryClientAtom } from "jotai-tanstack-query";
import { useHydrateAtoms } from "jotai/react/utils";
import React from "react";
// import { QueryClientProvider } from "react-query";
// import { QueryClient } from "react-query/types/core";

export const queryClient = new QueryClient();

//!change any?
const HydrateAtoms = ({ children }: any) => {
  useHydrateAtoms([[queryClientAtom, queryClient]]);
  return children;
};

export default function ProviderWrapper({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <HydrateAtoms>
        <Provider>{children}</Provider>
      </HydrateAtoms>
    </QueryClientProvider>
  );
}
