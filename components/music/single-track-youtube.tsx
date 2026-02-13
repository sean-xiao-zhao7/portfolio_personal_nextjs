import SuspenseLoader from "../widgets/suspense-loader"

export default function SingleTrackYouTube({ title, artist, src }: { title: string, artist: string, src: string }) {
    return <div className="flex gap-10 justify-between rounded-xl shadow-md bg-stone-800 light:bg-stone-50">
        <div className="p-10">
            <h2>{title}</h2>
            <p>
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
                className="w-1/2 h-70 rounded-e-xl"
            >
            </iframe>
        </SuspenseLoader>
    </div>
}