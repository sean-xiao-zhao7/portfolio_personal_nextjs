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
        <p>Welcome to my homepage!</p>
        <br />
        <p>Use the menu on left to explore.</p>
      </PageParagraph>
    </PageLargeBody>
  </>
}
