import PageLargeBody from "@/components/layouts/page/page-large-body";
import PageLargeHeader from "@/components/layouts/page/page-large-header";
import PageParagraph from "@/components/layouts/page/page-paragraph";
import ContentDivider from "@/components/widgets/content-divider";

export default function Home() {
  return <>
    <PageLargeHeader>
      Jean-Paul Xiao's Home Page
    </PageLargeHeader>
    <PageLargeBody>
      <PageParagraph>
        <p>Welcome to my website!</p>
        <ContentDivider />
        <p>I am a full stack software engineer with a love for building user-friendly, cool and accessible frontend components.</p>
      </PageParagraph>
    </PageLargeBody >
  </>
}
