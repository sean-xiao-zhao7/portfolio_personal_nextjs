import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import ModeSwitcher from "@/components/widgets/mode-switcher";

export default function MainMenu({ setColorMode, currentColorMode }: { setColorMode: Dispatch<SetStateAction<string>>, currentColorMode: string }) {

    const modeSwitcherHandler = () => { setColorMode((prevState) => prevState === 'light' ? 'dark' : 'light') };

    return <ul className="absolute p-8 flex flex-col gap-4">
        <li><Link href='/' className="text-2xl font-semibold">JPX</Link></li>
        <li><Link href='/cv' className="text-2xl font-semibold">CV</Link></li>
        <li><Link href='/ai' className="text-2xl font-semibold">AI</Link></li>
        <li><Link href='/music' className="text-2xl font-semibold">Music</Link></li>
        <li><ModeSwitcher text={currentColorMode === 'dark' ? 'Light' : 'Dark'} modeSwitchHandler={modeSwitcherHandler} /></li>
    </ul>
}