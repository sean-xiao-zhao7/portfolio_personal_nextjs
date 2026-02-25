'use client';

import { ReactNode, useState } from "react";
import { PT_Serif, Lexend_Deca, Birthstone } from "next/font/google";
import MainMenu from "@/components/layouts/menu/main-menu";

const fontBody = PT_Serif({
    weight: ["700", "400"],
    variable: "--font-body",
});

const fontHeader = Birthstone({
    weight: ["400"],
    variable: "--font-header",
});

/**
 * Root layout that allows switching between dark/light mode.
 * This is a client component, whereas layout.tsx is a server component that exports metadata. 
 */
export default function ColorModeLayout({ children }: { children: ReactNode }) {
    const [colorMode, setColorMode] = useState('dark');

    return <html lang="en" className={colorMode}>
        <body
            className={`relative flex flex-col md:flex-row ${fontBody.variable} ${fontHeader.variable} antialiased light:bg-white light:text-black`}
        >
            <MainMenu setColorMode={setColorMode} currentColorMode={colorMode} />
            <main className="w-full ml-0 md:ml-52">
                {children}
            </main>
        </body>
    </html>
}