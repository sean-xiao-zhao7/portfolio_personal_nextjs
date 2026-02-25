import { Dispatch, SetStateAction, useState } from "react";

import { Bot, Music, FileUser, House, Pencil, Camera, MenuIcon } from 'lucide-react';

import ModeSwitcher from "@/components/widgets/mode-switcher";
import MainMenuItem from "./main-menu-item";

/**
 * Left sidebar menu.
 */
export default function MainMenu({ setColorMode, currentColorMode }: { setColorMode: Dispatch<SetStateAction<string>>, currentColorMode: string }) {
    const iconOutlineColor = currentColorMode === 'dark' ? 'var(--green)' : 'black';
    const iconFillColor = currentColorMode === 'dark' ? undefined : 'var(--green)';
    const modeSwitcherHandler = () => { setColorMode((prevState) => prevState === 'light' ? 'dark' : 'light') };
    const [isMobile, setIsMobile] = useState(false);

    const toggleMobileMenuHandler = () => {
        setIsMobile((prevVal) => !prevVal);
    }

    return <>
        <ul className="fixed hidden md:flex min-h-screen pb-10 flex flex-col items-center bg-stone-950 light:bg-stone-100 light:border-r-1 light:border-stone-200">
            <MainMenuItem href="/" icon={<House fill={iconFillColor} color={iconOutlineColor} size={40} />}>Home</MainMenuItem>
            <MainMenuItem href="/cv" icon={<FileUser fill={iconFillColor} color={iconOutlineColor} size={40} />}>C.V.</MainMenuItem>
            <MainMenuItem href="/music" icon={<Music fill={iconFillColor} color={iconOutlineColor} size={40} />}>Music</MainMenuItem>
            <MainMenuItem href="/photo" icon={<Camera fill={iconFillColor} color={iconOutlineColor} size={40} />}>Photography</MainMenuItem>
            <MainMenuItem href="/ai" icon={<Bot fill={iconFillColor} color={iconOutlineColor} size={40} />}>A.I.</MainMenuItem>
            <MainMenuItem href="/blog" icon={<Pencil fill={iconFillColor} color={iconOutlineColor} size={40} />}>Blog</MainMenuItem>
            <li className="px-10 py-8"><ModeSwitcher text={currentColorMode === 'dark' ? 'Light' : 'Dark'} modeSwitchHandler={modeSwitcherHandler} on={currentColorMode === 'dark'} /></li>
        </ul>
        <ul className={`mobile-menu ${isMobile ? 'flex' : 'hidden'} fixed absolute z-10 min-h-screen pb-10 flex flex-col items-center bg-stone-950 light:bg-stone-100 light:border-r-1 light:border-stone-200`}>
            <div className="pt-4" onClick={toggleMobileMenuHandler}>
                <MenuIcon fill={iconFillColor} color={iconOutlineColor} size={40} />
            </div>
            <MainMenuItem href="/" icon={<House fill={iconFillColor} color={iconOutlineColor} size={40} />}>Home</MainMenuItem>
            <MainMenuItem href="/cv" icon={<FileUser fill={iconFillColor} color={iconOutlineColor} size={40} />}>C.V.</MainMenuItem>
            <MainMenuItem href="/music" icon={<Music fill={iconFillColor} color={iconOutlineColor} size={40} />}>Music</MainMenuItem>
            <MainMenuItem href="/photo" icon={<Camera fill={iconFillColor} color={iconOutlineColor} size={40} />}>Photography</MainMenuItem>
            <MainMenuItem href="/ai" icon={<Bot fill={iconFillColor} color={iconOutlineColor} size={40} />}>A.I.</MainMenuItem>
            <MainMenuItem href="/blog" icon={<Pencil fill={iconFillColor} color={iconOutlineColor} size={40} />}>Blog</MainMenuItem>
            <li className="px-10 py-8"><ModeSwitcher text={currentColorMode === 'dark' ? 'Light' : 'Dark'} modeSwitchHandler={modeSwitcherHandler} on={currentColorMode === 'dark'} /></li>
        </ul>
        <div className="flex md:hidden p-2 fixed z-0" onClick={toggleMobileMenuHandler}>
            <MenuIcon fill={iconFillColor} color={iconOutlineColor} size={30} />
        </div>
    </>
}