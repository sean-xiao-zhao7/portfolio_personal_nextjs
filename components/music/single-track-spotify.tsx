import SuspenseLoader from "../widgets/suspense-loader"

export default function SingleTrackSpotify({ src }: { src: string }) {
    return <SuspenseLoader>
        <iframe
            data-testid="embed-iframe"
            src={src}
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
        </iframe>
    </SuspenseLoader>
}