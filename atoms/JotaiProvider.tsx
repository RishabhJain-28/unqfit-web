"use client";
import { Provider } from "jotai";
import React from "react";
import { UserResponseDto } from "../clientApi/.generated";

export default function JotaiProvider({
  children,
}: React.PropsWithChildren<{}>) {
  return <Provider>{children}</Provider>;
}
