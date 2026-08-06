import type { Metadata } from "next";
import ColorModeLayout from "./color-mode-layout";

export const metadata: Metadata = {
  title: "Cyan Jean",
  description: "Cyan Jean's Portfolio site.",
};

/**
 * Placeholder for ColorModeLayout 
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ColorModeLayout>{children}</ColorModeLayout>
  );
}
