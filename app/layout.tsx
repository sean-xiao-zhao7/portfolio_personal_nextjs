import type { Metadata } from "next";
import ColorModeLayout from "./color-mode-layout";

export const metadata: Metadata = {
  title: "Sean Xiao",
  description: "Sean Xiao's Portfolio site.",
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
