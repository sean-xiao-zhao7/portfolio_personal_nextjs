import Link from "next/link";

export default function MainMenu() {
    return <ul className="absolute p-8 flex flex-col gap-4">
        <li><Link href='/' className="text-2xl font-semibold">JPX</Link></li>
        <li><Link href='/cv' className="text-2xl font-semibold">CV</Link></li>
        <li><Link href='/ai' className="text-2xl font-semibold">AI</Link></li>
        <li><Link href='/music' className="text-2xl font-semibold">Music</Link></li>
    </ul>
}