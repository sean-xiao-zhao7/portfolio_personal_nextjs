import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { Bot, Music, FileUser, House } from 'lucide-react';

import ModeSwitcher from "@/components/widgets/mode-switcher";

/**
 * Left sidebar menu.
 */
export default function MainMenu({ setColorMode, currentColorMode }: { setColorMode: Dispatch<SetStateAction<string>>, currentColorMode: string }) {
    const iconOutlineColor = currentColorMode === 'dark' ? 'var(--green)' : 'black';
    const iconFillColor = currentColorMode === 'dark' ? undefined : 'var(--green)';
    const modeSwitcherHandler = () => { setColorMode((prevState) => prevState === 'light' ? 'dark' : 'light') };

    return <ul className="min-h-screen p-10 flex flex-col gap-10 items-center bg-stone-950 light:bg-stone-100 light:border-stone-200 light:border-r-1">
        <li><Link href='/' className="font-header text-4xl flex flex-col items-center"><House fill={iconFillColor} color={iconOutlineColor} size={40} />Home</Link></li>
        <li><Link href='/cv' className="font-header text-4xl flex flex-col items-center"><FileUser fill={iconFillColor} color={iconOutlineColor} size={40} />CV</Link></li>
        <li><Link href='/ai' className="font-header text-4xl flex flex-col items-center"><Bot fill={iconFillColor} color={iconOutlineColor} size={40} />AI</Link></li>
        <li><Link href='/music' className="font-header text-4xl flex flex-col items-center"><Music fill={iconFillColor} color={iconOutlineColor} size={40} />Music</Link></li>
        <li><ModeSwitcher text={currentColorMode === 'dark' ? 'Light' : 'Dark'} modeSwitchHandler={modeSwitcherHandler} on={currentColorMode === 'dark'} /></li>
    </ul>
}