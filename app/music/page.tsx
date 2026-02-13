import PageBody from "@/components/layouts/page/page-body";
import PageMainHeader from "@/components/layouts/page/page-header";
import SingleTrack from "@/components/music/single-track";

export default function MusicPage() {
    return <>
        <PageMainHeader>Music</PageMainHeader>
        <PageBody>
            <SingleTrack src='https://open.spotify.com/embed/track/3qyv7gp2hOiD6YOy7v5ueR' />
        </PageBody>
    </>
}