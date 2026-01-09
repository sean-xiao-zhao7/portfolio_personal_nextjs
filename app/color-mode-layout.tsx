'use client';

import { Geist, Geist_Mono } from "next/font/google";

import MainMenu from "@/components/layouts/menu/main-menu";
import { ReactNode, useState } from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

/**
 * Root layout that allows switching between dark/light mode.
 * This is a client component, whereas layout.tsx is a server component that exports metadata. 
 */
export default function ColorModeLayout({ children }: { children: ReactNode }) {
    const [colorMode, setColorMode] = useState('dark');

    return <html lang="en" className={colorMode}>
        <body
            className={`flex flex-row ${geistSans.variable} ${geistMono.variable} antialiased light:bg-white light:text-black`}
        >
            <MainMenu setColorMode={setColorMode} currentColorMode={colorMode} />
            <div className="p-8">
                {children}
            </div>
        </body>
    </html>
}