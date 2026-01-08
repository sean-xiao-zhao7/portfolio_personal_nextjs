'use client';

import { Geist, Geist_Mono } from "next/font/google";

import MainMenu from "@/components/layouts/menu/MainMenu";
import { ReactNode } from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function ColorModeLayout({ children }: { children: ReactNode }) {
    return <html lang="en" className="dark">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased light:bg-white light:text-black`}
        >
            <MainMenu />
            <div className="p-8">
                {children}
            </div>
        </body>
    </html>
}