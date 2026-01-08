import type { Metadata } from "next";

import "./globals.css";
import ColorModeLayout from "./colorModeLayout";

export const metadata: Metadata = {
  title: "JPX",
  description: "JPX Portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ColorModeLayout>{children}</ColorModeLayout>
  );
}
