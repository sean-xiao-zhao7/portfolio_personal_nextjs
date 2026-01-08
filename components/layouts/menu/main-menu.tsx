import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export default function MainMenu({ setColorMode, currentColorMode }: { setColorMode: Dispatch<SetStateAction<string>>, currentColorMode: string }) {
    return <ul className="absolute p-8 flex flex-col gap-4">
        <li><Link href='/' className="text-2xl font-semibold">JPX</Link></li>
        <li><Link href='/cv' className="text-2xl font-semibold">CV</Link></li>
        <li><Link href='/ai' className="text-2xl font-semibold">AI</Link></li>
        <li><Link href='/music' className="text-2xl font-semibold">Music</Link></li>
        <li><button type="button" className="text-2xl font-semibold cursor-pointer" onClick={() => setColorMode((prevState) => prevState === 'light' ? 'dark' : 'light')}>{currentColorMode === 'dark' ? 'Light mode' : 'Dark mode'}</button></li>
    </ul>
}