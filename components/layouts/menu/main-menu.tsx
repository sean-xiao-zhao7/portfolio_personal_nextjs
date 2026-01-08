import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { Bot, Music, FileUser, House } from 'lucide-react';

import ModeSwitcher from "@/components/widgets/mode-switcher";

export default function MainMenu({ setColorMode, currentColorMode }: { setColorMode: Dispatch<SetStateAction<string>>, currentColorMode: string }) {
    const iconOutlineColor = currentColorMode === 'dark' ? 'var(--green)' : 'black';
    const iconFillColor = currentColorMode === 'dark' ? undefined : 'var(--green)';
    const modeSwitcherHandler = () => { setColorMode((prevState) => prevState === 'light' ? 'dark' : 'light') };

    return <ul className="absolute p-8 flex flex-col gap-4 items-center">
        <li><Link href='/' className="text-2xl font-semibold flex flex-col items-center"><House fill={iconFillColor} color={iconOutlineColor} size={40} /> JPX</Link></li>
        <li><Link href='/cv' className="text-2xl font-semibold flex flex-col items-center"><FileUser fill={iconFillColor} color={iconOutlineColor} size={40} /> CV</Link></li>
        <li><Link href='/ai' className="text-2xl font-semibold flex flex-col items-center"><Bot fill={iconFillColor} color={iconOutlineColor} size={40} /> AI</Link></li>
        <li><Link href='/music' className="text-2xl font-semibold flex flex-col items-center"><Music fill={iconFillColor} color={iconOutlineColor} size={40} /> Music</Link></li>
        <li><ModeSwitcher text={currentColorMode === 'dark' ? 'Light' : 'Dark'} modeSwitchHandler={modeSwitcherHandler} on={currentColorMode === 'dark'} /></li>
    </ul>
}