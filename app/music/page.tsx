import PageBody from "@/components/layouts/page/page-body";
import PageMainHeader from "@/components/layouts/page/page-header";
import SingleTrackYouTube from "@/components/music/single-track-youtube";

export default function MusicPage() {
    return <>
        <PageMainHeader>Music</PageMainHeader>
        <PageBody>
            <div className="flex flex-col flex-wrap gap-10 place-content-center place-content-stretch">
                <SingleTrackYouTube src='https://www.youtube.com/embed/6YZlFdTIdzM' title="Clock Strikes" artist="ONE OK ROCK" />
                <SingleTrackYouTube src='https://www.youtube.com/embed/f8aCemLHDdw' title="Forever" artist="「Story of Hope」" />
                <SingleTrackYouTube src='https://www.youtube.com/embed/V_cHzP8Uexw' title="「秋明菊」" artist="神はサイコロを振らない" />
                <SingleTrackYouTube src='https://www.youtube.com/embed/RUfGuWeFcQY' title="「君へ送る唄」" artist="みきなつみ" />
                <SingleTrackYouTube src='https://www.youtube.com/embed/d6i4AtCxrDo' title="「拝啓、少年よ」" artist="Hump Back" />
                <SingleTrackYouTube src='https://www.youtube.com/embed/AVlaVkH9AQE' title="『Dear My Boo』" artist="當山みれい" />
                <SingleTrackYouTube src='https://www.youtube.com/embed/n7MyoBki9wk' title="掌で踊る" artist="そこに鳴る" />
                <SingleTrackYouTube src='https://www.youtube.com/embed/E7I7nREchHc' title="言葉" artist="SECONDWALL" />
                <SingleTrackYouTube src='https://www.youtube.com/embed/b4lYvHE_cvM' title="Into The Future" artist="Dizzy Sunfist" />
                <SingleTrackYouTube src='https://www.youtube.com/embed/uAXIaft7fwI' title="「グッバイライアー」" artist="nolala" />
            </div>
        </PageBody>
    </>
}