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
        <p>Welcome to my home page! I'm Sean/Cyan, a full stack software developer by trade.</p>
        <p>Feel free to explore using the menu on the left.</p>
      </PageParagraph>
      <PageParagraph>
        <p>C.V. - curriculum vitae: see my list of career projects and history.</p>
        <p>A.I. - Check out A.I. images made with Midjourney.</p>
        <p>Music - See some music recommendations.</p>
        <p>Blog - Read blog posts.</p>
      </PageParagraph>
    </PageLargeBody>
  </>
}
