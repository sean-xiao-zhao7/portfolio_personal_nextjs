import { Moon, Sun } from 'lucide-react';

export default function ModeSwitcher({ text = '', modeSwitchHandler, on }: { text: string, modeSwitchHandler: () => void, on: boolean }) {
    return <button className="rounded-md text-2xl font-semibold cursor-pointer flex flex-row justify-center" onClick={modeSwitchHandler}>
        {on ? <Sun fill='yellow' color='yellow' size={40} /> : <Moon fill='yellow' size={40} />}
    </button>
}