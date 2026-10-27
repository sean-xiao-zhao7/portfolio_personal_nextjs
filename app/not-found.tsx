import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-50 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl text-center">
                <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-indigo-400">
                    404
                </h1>
                <h2 className="text-xl font-semibold mb-2">Page Not Found</h2>
                <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
                    This page does not exist.
                </p>
                <Link
                    href="/"
                    className="inline-block w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition-colors cursor-pointer text-center"
                >
                    Return Home
                </Link>
            </div>
        </main>
    );
}
