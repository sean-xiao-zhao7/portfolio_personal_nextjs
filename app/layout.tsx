import type { Metadata } from "next";
import ColorModeLayout from "./color-mode-layout";

export const metadata: Metadata = {
    title: "Cyan JPX",
    description: "Cyan JPX's Portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <ColorModeLayout>{children}</ColorModeLayout>;
}
