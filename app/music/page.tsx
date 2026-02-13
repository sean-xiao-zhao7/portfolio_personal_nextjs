import PageBody from "@/components/layouts/page/page-body";
import PageMainHeader from "@/components/layouts/page/page-header";
import SingleTrackYouTube from "@/components/music/single-track-youtube";

export default function MusicPage() {
    return <>
        <PageMainHeader>Music</PageMainHeader>
        <PageBody>
            <div className="flex flex-col flex-wrap gap-10 place-content-center place-items-center">
                <SingleTrackYouTube src='https://www.youtube.com/embed/6YZlFdTIdzM' />
                <SingleTrackYouTube src='https://www.youtube.com/embed/f8aCemLHDdw' />
                <SingleTrackYouTube src='https://www.youtube.com/embed/V_cHzP8Uexw' />
                <SingleTrackYouTube src='https://www.youtube.com/embed/RUfGuWeFcQY' />
                <SingleTrackYouTube src='https://www.youtube.com/embed/d6i4AtCxrDo' />
                <SingleTrackYouTube src='https://www.youtube.com/embed/AVlaVkH9AQE' />
                <SingleTrackYouTube src='https://www.youtube.com/embed/n7MyoBki9wk' />
                <SingleTrackYouTube src='https://www.youtube.com/embed/E7I7nREchHc' />
                <SingleTrackYouTube src='https://www.youtube.com/embed/b4lYvHE_cvM' />
                <SingleTrackYouTube src='https://www.youtube.com/embed/uAXIaft7fwI' />
            </div>
        </PageBody>
    </>
}