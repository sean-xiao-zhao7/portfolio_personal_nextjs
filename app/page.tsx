import PageLargeBody from "@/components/layouts/page/page-large-body";
import PageLargeHeader from "@/components/layouts/page/page-large-header";
import PageParagraph from "@/components/layouts/page/page-paragraph";

export default function Home() {
  return <>
    <PageLargeHeader>
      Cyan Jean's Portfolio
    </PageLargeHeader>
    <PageLargeBody>
      <PageParagraph>
        <p>Welcome to my home page!</p>
        <p>Use the menu on the left to explore the site.</p>
      </PageParagraph>
      <PageParagraph>
        <p>C.V. - curriculum vitae: see my list of career projects and history.</p>
      </PageParagraph>
      <PageParagraph>
        <p>A.I. - Check out A.I. images made with Midjourney.</p>
      </PageParagraph>
      <PageParagraph>
        <p>Music - See some music recommendations.</p>
      </PageParagraph>
      <PageParagraph>
        <p>Blog - Read blog posts.</p>
      </PageParagraph>
    </PageLargeBody>
  </>
}
