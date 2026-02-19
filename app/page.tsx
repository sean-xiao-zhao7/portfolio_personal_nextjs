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
        <p>Welcome to Cyan Jean's home page!</p>
        <p>Feel free to explore using the menu on the left.</p>
      </PageParagraph>
      <PageParagraph>
        <h2>Site Sections</h2>
        <ContentDivider />
        <p> C.V. - curriculum vitae: see my list of career projects and history.</p>
        <p>A.I. - Check out A.I. images made with Midjourney.</p>
        <p>Music - See some music recommendations.</p>
        <p>Blog - Read blog posts.</p>
      </PageParagraph>
    </PageLargeBody >
  </>
}
