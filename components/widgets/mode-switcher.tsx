export default function ModeSwitcher({ text, modeSwitchHandler, }: { text: string, modeSwitchHandler: () => void }) {
    return <button className="rounded-md text-2xl font-semibold cursor-pointer" onClick={modeSwitchHandler}>
        {text}
    </button>
}