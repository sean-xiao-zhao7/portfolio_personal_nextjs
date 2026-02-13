import SuspenseLoader from "../widgets/suspense-loader"

export default function SingleTrackYouTube({ title, artist, src }: { title: string, artist: string, src: string }) {
    return <div className="flex gap-10 justify-between rounded-xl shadow-md bg-stone-800 light:bg-stone-50 border-1 border-stone-800 light:border-stone-100">
        <div className="p-10 flex flex-col gap-10 place-content-center place-items-center w-1/3">
            <h2 className="text-4xl">{title}</h2>
            <p className="text-2xl">
                {artist}
            </p>
        </div>
        <SuspenseLoader>
            <iframe
                src={src}
                title="YouTube video player"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
                className="w-2/3 h-80 rounded-e-xl"
            >
            </iframe>
        </SuspenseLoader>
    </div>
}