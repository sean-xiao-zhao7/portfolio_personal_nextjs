import PageLargeBody from "@/components/layouts/page/page-large-body";
import PageLargeHeader from "@/components/layouts/page/page-large-header";
import PageParagraph from "@/components/layouts/page/page-paragraph";
import ContentDivider from "@/components/widgets/content-divider";

export default function Home() {
  return <>
    <PageLargeHeader>
      Cyan Jean's Portfolio
    </PageLargeHeader>
    <PageLargeBody>
      <PageParagraph>
        <p>Welcome to Cyan Jean's portfolio!</p>
        <p>Explore the various sections of this site via the main menu.</p>
      </PageParagraph>
      <PageParagraph>
        <h2>Sections</h2>
        <ContentDivider />
        <p> C.V. - Curriculum vitae of my career as a software developer.</p>     
        <p>Music - J-pop music video collection.</p>
        <p>Photography - DSLR photos.</p>        
        <p>A.I. - Completed Midjourney projects.</p>
        <p>Blog - Under construction.</p>
      </PageParagraph>
    </PageLargeBody >
  </>
}
