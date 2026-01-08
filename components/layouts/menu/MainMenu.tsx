import Link from "next/link";

export default function MainMenu() {
    return <ul>
        <li><Link href='/cv'>CV</Link></li>
        <li><Link href='/ai'>AI</Link></li>
        <li><Link href='/music'>Music</Link></li>
    </ul>
}