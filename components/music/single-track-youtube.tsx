import SuspenseLoader from "../widgets/suspense-loader"

export default function SingleTrackYouTube({ src }: { src: string }) {
    return <SuspenseLoader>
        <iframe
            src={src}
            title="YouTube video player"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
            className="w-1/3 h-70"
        >
        </iframe>
    </SuspenseLoader>
}