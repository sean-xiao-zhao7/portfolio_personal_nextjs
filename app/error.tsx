"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to your error tracking service (e.g., Sentry)
        console.error(error);
    }, [error]);

    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-50 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl text-center">
                <div className="w-12 h-12 bg-red-500/10 text-red-400 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    !
                </div>
                <h1 className="text-2xl font-bold tracking-tight mb-2">
                    Something went wrong!
                </h1>
                <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
                    An unexpected error occurred while processing your request.
                    Please try again.
                </p>
                <button
                    onClick={() => reset()}
                    className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition-colors cursor-pointer"
                >
                    Try again
                </button>
            </div>
        </main>
    );
}
