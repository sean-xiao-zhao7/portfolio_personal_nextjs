import Link from "next/link";
import { ReactNode } from "react";

/**
 * A single main menu item on the left.
 */
export default function MainMenuItem({ href, icon, children }: {
    href: string, icon: ReactNode, children: ReactNode
}) {
    return <li className="w-full"><Link href={href} className="font-header text-4xl px-10 py-8 flex flex-col items-center hover:bg-stone-800 light:hover:bg-stone-200">{icon} {children}</Link></li>
}