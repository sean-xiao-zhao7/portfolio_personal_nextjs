import Link from "next/link";
import { ReactNode } from "react";

/**
 * A single main menu item on the left.
 */
export default function MainMenuItem({
    href,
    icon,
    children,
}: {
    href: string;
    icon: ReactNode;
    children: ReactNode;
}) {
    return (
        <li>
            <Link
                href={href}
                className="flex flex-col md:flex-row items-center text-center md:text-left md:w-60 font-header text-3xl md:text-4xl px-2 py-4 md:px-10 md:py-8 hover:bg-stone-800 light:hover:bg-stone-200"
            >
                <div className="md:mr-3">{icon}</div> {children}
            </Link>
        </li>
    );
}
