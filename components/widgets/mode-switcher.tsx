import { Moon, Sun } from "lucide-react";

export default function ModeSwitcher({
    modeSwitchHandler,
    on,
}: {
    text: string;
    modeSwitchHandler: () => void;
    on: boolean;
}) {
    return (
        <li>
            <button
                className="flex flex-col md:flex-row items-center justify-center md:text-left md:w-60 font-header text-3xl md:text-4xl px-2 py-4 md:px-10 md:py-8 cursor-pointer hover:bg-stone-800 light:hover:bg-stone-200"
                onClick={modeSwitchHandler}
            >
                {on ? (
                    <Sun fill="yellow" color="yellow" size={30} />
                ) : (
                    <Moon fill="yellow" size={30} />
                )}
            </button>
        </li>
    );
}
