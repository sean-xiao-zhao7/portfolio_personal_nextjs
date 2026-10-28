import { ReactNode } from "react";

import CursiveText from "@/components/text/cursive-text";

/**
 * Page main header for regular pages.
 */
export default function PageMainHeader({
    padding,
    children,
}: {
    padding?: string;
    children: ReactNode;
}) {
    return (
        <h1
            className={`text-5xl md:text-6xl text-center md:text-left p-6 py-4 ${
                padding ? padding : "md:pl-8 md:pt-4 md:pb-6"
            } bg-stone-800 light:bg-stone-50 light:border-b light:border-stone-100`}
        >
            <CursiveText>{children}</CursiveText>
        </h1>
    );
}
