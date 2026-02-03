import { Dispatch, SetStateAction } from "react";

import { Bot, Music, FileUser, House } from 'lucide-react';

import ModeSwitcher from "@/components/widgets/mode-switcher";
import MainMenuItem from "./main-menu-item";

/**
 * Left sidebar menu.
 */
export default function MainMenu({ setColorMode, currentColorMode }: { setColorMode: Dispatch<SetStateAction<string>>, currentColorMode: string }) {
    const iconOutlineColor = currentColorMode === 'dark' ? 'var(--green)' : 'black';
    const iconFillColor = currentColorMode === 'dark' ? undefined : 'var(--green)';
    const modeSwitcherHandler = () => { setColorMode((prevState) => prevState === 'light' ? 'dark' : 'light') };

    return <ul className="min-h-screen p-10 flex flex-col gap-10 items-center bg-stone-950 light:bg-stone-100 light:border-r-1 light:border-stone-200">
        <MainMenuItem href="/" icon={<House fill={iconFillColor} color={iconOutlineColor} size={40} />}>Home</MainMenuItem>
        <MainMenuItem href="/cv" icon={<FileUser fill={iconFillColor} color={iconOutlineColor} size={40} />}>About</MainMenuItem>
        <MainMenuItem href="/ai" icon={<Bot fill={iconFillColor} color={iconOutlineColor} size={40} />}>A.I.</MainMenuItem>
        <MainMenuItem href="/music" icon={<Music fill={iconFillColor} color={iconOutlineColor} size={40} />}>Music</MainMenuItem>
        <li><ModeSwitcher text={currentColorMode === 'dark' ? 'Light' : 'Dark'} modeSwitchHandler={modeSwitcherHandler} on={currentColorMode === 'dark'} /></li>
    </ul>
}